import React from "react";
import { gsap, useGSAP } from "../lib/gsap";

type StaggerVariant =
  | "fade-up"
  | "fade-in"
  | "slide-up"
  | "slide-from-left"
  | "slide-from-right"
  | "scale-pop"
  | "gallery-tiles";

type StaggerOptions = {
  childSelector?: string;
  variant?: StaggerVariant;
  from?: "start" | "center" | "end" | "random" | number;
  y?: number;
  x?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  triggerStart?: string;
};

export const useGsapStagger = (
  containerRef: React.RefObject<HTMLElement | null>,
  options: StaggerOptions = {}
) => {
  const {
    childSelector = ".stagger-item",
    variant = "fade-up",
    from = "start",
    y = 30,
    x = 0,
    duration = 0.8,
    stagger = 0.12,
    delay = 0,
    triggerStart = "top 80%",
  } = options;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll(childSelector);
      if (elements.length === 0) return;

      let fromVars: gsap.TweenVars = { autoAlpha: 0 };
      let toVars: gsap.TweenVars = {
        autoAlpha: 1,
        duration,
        delay,
        stagger: {
          each: stagger,
          from,
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
        },
      };

      // Apply variants
      switch (variant) {
        case "fade-up":
          fromVars = { ...fromVars, y };
          toVars = { ...toVars, y: 0 };
          break;

        case "slide-up":
          fromVars = { ...fromVars, y: 60 };
          toVars = { ...toVars, y: 0 };
          break;

        case "fade-in":
          // Defaults are sufficient (opacity only)
          break;

        case "slide-from-left":
          fromVars = { ...fromVars, x: -40 };
          toVars = { ...toVars, x: 0 };
          break;

        case "slide-from-right":
          fromVars = { ...fromVars, x: 40 };
          toVars = { ...toVars, x: 0 };
          break;

        case "scale-pop":
          fromVars = { ...fromVars, scale: 0.8, y: 20 };
          toVars = { ...toVars, scale: 1, y: 0, ease: "back.out(1.7)" };
          break;

        case "gallery-tiles":
          fromVars = { ...fromVars, scale: 0.9, y: 30 };
          toVars = { ...toVars, scale: 1, y: 0, duration: 1.0 };
          break;
      }

      gsap.fromTo(elements, fromVars, toVars);
    },
    { dependencies: [childSelector, variant, stagger, delay, duration], scope: containerRef }
  );
};