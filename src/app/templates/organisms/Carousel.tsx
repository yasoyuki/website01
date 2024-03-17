"use client"

import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={image}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Carousel;