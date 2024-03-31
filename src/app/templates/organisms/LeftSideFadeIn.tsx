"use client"

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
}

const LeftSideFadeIn: React.FC<FadeInOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100 fadeInLeft' : 'opacity-0'}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default LeftSideFadeIn;