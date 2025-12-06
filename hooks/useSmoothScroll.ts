import { useCallback } from "react";
import { gsap } from "../lib/gsap";

export const useSmoothScroll = () => {
  const scrollToId = useCallback((id: string) => {
    // If it's just "#", scroll to top
    if (id === "#") {
      gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.inOut" });
      return;
    }
    
    // Check if element exists
    const target = id.startsWith("#") ? id : `#${id}`;
    const el = document.querySelector(target);
    
    if (el) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 80 }, // Offset for sticky header
        duration: 1.2,
        ease: "power3.inOut",
      });
    }
  }, []);

  return { scrollToId };
};