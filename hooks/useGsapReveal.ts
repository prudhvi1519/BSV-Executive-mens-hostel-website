import React from "react";
import { gsap, useGSAP } from "../lib/gsap";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealVariant =
  | "soft-fade"
  | "lift"
  | "slide-left"
  | "slide-right"
  | "scale-in"
  | "rotate-in"
  | "blur-in";

type RevealOptions = {
  variant?: RevealVariant;
  direction?: Direction; // Fallback / supplementary
  distance?: number;
  delay?: number;
  duration?: number;
  triggerStart?: string;
  threshold?: number;
};

export const useGsapReveal = (
  ref: React.RefObject<HTMLElement | null>,
  options: RevealOptions = {}
) => {
  const {
    variant = "soft-fade",
    direction = "up", // Used if variant implies direction
    distance = 32,
    delay = 0,
    duration = 0.8,
    triggerStart = "top 85%",
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      const el = ref.current;

      // Default state
      let fromVars: gsap.TweenVars = { opacity: 0, autoAlpha: 0 };
      let toVars: gsap.TweenVars = {
        opacity: 1,
        autoAlpha: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          toggleActions: "play none none none", // Play once
        },
      };

      // Configuration based on variant
      switch (variant) {
        case "soft-fade":
          fromVars = { ...fromVars, y: 12 };
          toVars = { ...toVars, y: 0 };
          break;

        case "lift":
          fromVars = { ...fromVars, y: 40 };
          toVars = { ...toVars, y: 0 };
          break;

        case "slide-left":
          fromVars = { ...fromVars, x: -distance };
          toVars = { ...toVars, x: 0 };
          break;

        case "slide-right":
          fromVars = { ...fromVars, x: distance };
          toVars = { ...toVars, x: 0 };
          break;

        case "scale-in":
          fromVars = { ...fromVars, scale: 0.92, transformOrigin: "center center" };
          toVars = { ...toVars, scale: 1, ease: "expo.out" };
          break;

        case "rotate-in":
          fromVars = { ...fromVars, y: 30, rotation: direction === "right" ? -3 : 3 };
          toVars = { ...toVars, y: 0, rotation: 0, ease: "back.out(1.4)" };
          break;
        
        case "blur-in":
          fromVars = { ...fromVars, filter: "blur(10px)", scale: 0.98 };
          toVars = { ...toVars, filter: "blur(0px)", scale: 1, duration: 1.2 };
          break;
      }

      gsap.fromTo(el, fromVars, toVars);
    },
    { dependencies: [variant, distance, delay, duration], scope: ref }
  );
};