import { useState, useEffect, useRef } from "react";

export const useHeaderScroll = (threshold = 20) => {
  const [isHidden, setIsHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine background presence
      setHasBackground(currentScrollY > threshold);

      // Determine visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isHidden, hasBackground };
};
