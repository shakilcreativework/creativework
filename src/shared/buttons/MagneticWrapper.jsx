
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MagneticButton({
  children,
  text,
  className,
  to,
  href,
  onClick,
  as = "button",
  leftIcon,
  rightIcon
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const reset = () => {
      el.style.transform = "translate(0,0)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  // ✅ RESPONSIVE + CLEAN STYLES
  const baseStyles = twMerge(
    clsx(
      "inline-flex items-center justify-center",
      "rounded-full transition-transform duration-300 cursor-pointer",

      // ✅ Responsive defaults (ONLY if not provided)
      !className?.match(/py-/) && "py-1.5 sm:py-2 md:py-2.5",
      !className?.match(/px-/) && "px-4 sm:px-6 md:px-7",
      !className?.match(/text-/) && "text-sm sm:text-base",

      // spacing
      !className?.includes("gap-") && "gap-2 sm:gap-3",

      // colors
      !className?.includes("bg-") && "bg-white",
      !className?.includes("text-") && "text-[#1F1B16]",

      // interaction
      "hover:scale-105 active:scale-95",
      "hover:text-[#E07A5F]",

      // shadow logic
      !className?.match(/shadow(-|$)/) && "shadow-xs hover:shadow-sm",

      className
    )
  );

  const content = (
    <span className="relative z-10 flex items-center">
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}

      <span>{children || text}</span>

      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </span>
  );

  // 🔀 Render types
  if (as === "link" && to) {
    return (
      <Link to={to} ref={ref} className={baseStyles}>
        {content}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} ref={ref} className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}