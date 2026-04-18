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
  as = "button", // "button" | "link" | "a"
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

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
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

  
  // button styles
  const baseStyles = twMerge(clsx(
    "inline-flex items-center justify-center transition-transform duration-200 rounded-full cursor-pointer active:text-[#E07A5F] hover:text-[#E07A5F]",

    !className?.includes("bg-") && "bg-white",
    !className?.includes("text-") && "text-black",
    !className?.includes("py-") && "py-2",
    !className?.includes("px-") && "px-7",

    // ✅ fixed shadow logic
    !className?.match(/shadow(-|$)/) && "shadow-xs hover:shadow-sm",
    !className?.includes("active") && "active:text-[#E07A5F]",
    !className?.includes("hover") && "hover:text-[#E07A5F]",

    className
  ));


  // 🔀 Render types
  if (as === "link" && to) {
    return (
      <Link to={to} ref={ref} className={`${baseStyles} flex justify-center items-center gap-3`}>
        {leftIcon ? leftIcon : ''} {children || text} {rightIcon ? rightIcon : ''}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} ref={ref} className={`${baseStyles} flex justify-center items-center gap-3`}>
        {leftIcon ? leftIcon : ''} {children || text} {rightIcon ? rightIcon : ''}
      </a>
    );
  }

  return (
    <button ref={ref} onClick={onClick} className={`${baseStyles} flex justify-center items-center gap-3`}>
      {leftIcon ? leftIcon : ''} {children || text} {rightIcon ? rightIcon : ''}
    </button>
  );
}