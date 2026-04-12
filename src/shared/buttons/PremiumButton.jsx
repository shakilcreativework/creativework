import { useState } from "react";

export default function PremiumButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative px-10 py-4 rounded-2xl font-semibold text-white overflow-hidden group transition-all duration-300"
      >
        {/* Animated linear Border */}
        <span className="absolute inset-0 rounded-2xl p-0.5 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 animate-spin-slow"></span>

        {/* Inner Background */}
        <span className="absolute inset-0.5 bg-black rounded-2xl"></span>

        {/* Glow Effect */}
        <span className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 blur-xl opacity-30 group-hover:opacity-70 transition duration-500"></span>

        {/* Text */}
        <span className="relative z-10 transition-all duration-300">
          {hovered
            ? "You Won’t Regret This 😏"
            : "Unlock the Design Experience ✨"}
        </span>
      </button>
    </div>
  );
}