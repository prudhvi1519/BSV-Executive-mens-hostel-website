import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

// Register plugins only once if running in a browser environment
if (typeof window !== "undefined") {
  // GSAP's registerPlugin is idempotent and safe to call multiple times
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
  
  // Set global defaults for a premium feel
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });
}

// Configure default ScrollTrigger behavior
ScrollTrigger.config({
  ignoreMobileResize: true
});

export { gsap, ScrollTrigger, ScrollToPlugin, useGSAP };