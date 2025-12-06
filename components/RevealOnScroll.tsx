import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number; // in ms
  className?: string;
};

export const RevealOnScroll: React.FC<Props> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const delayStyle = { transitionDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};
