import { useEffect, useState } from "react";

const useFadeColorCycle = (colors, duration = 2500, minOpacity = 0.6) => {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let timer;

    const cycle = () => {
      // Fade DOWN (not fully disappear)
      setOpacity(minOpacity);

      timer = setTimeout(() => {
        // Change color
        setIndex((prev) => (prev + 1) % colors.length);

        // Fade UP
        setOpacity(1);
      }, duration / 2);
    };

    const interval = setInterval(cycle, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [colors.length, duration, minOpacity]);

  return {
    color: colors[index],
    opacity,
  };
};

export default useFadeColorCycle;