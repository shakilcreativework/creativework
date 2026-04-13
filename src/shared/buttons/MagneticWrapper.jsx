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

  const baseStyles = clsx(
    "inline-flex items-center justify-center transition-transform duration-200 py-2 px-7 rounded-full cursor-pointer shadow-xs hover:shadow-sm",
    !className?.includes("bg-") && "bg-white",
    !className?.includes("text-") && "text-black",
    className
  );

  // 🔀 Render types
  if (as === "link" && to) {
    return (
      <Link to={to} ref={ref} className={baseStyles}>
        {children || text}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} ref={ref} className={baseStyles}>
        {children || text}
      </a>
    );
  }

  return (
    <button ref={ref} onClick={onClick} className={baseStyles}>
      {children || text}
    </button>
  );
}