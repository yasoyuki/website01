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
    <div className="carousel mb-20">
      {images.map((image, index) => (
        <div
          key={image}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
           <div className="carousel-overlay"></div>
          <div className="carousel-text">
            <p className='text-lg md:text-2xl border-2 py-3 px-5'>共に創る、新時代のワークスペース</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;