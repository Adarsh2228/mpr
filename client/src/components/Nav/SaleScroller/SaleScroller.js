import React, { useState, useEffect } from 'react';
import './SaleScroller.css';

const images = [
  "https://th.bing.com/th/id/OIP.olKOus3gsbtxXwwDTGYOiAHaH_?w=177&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.9EPw9SskcC9syVJIsVlBgQHaE0?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.7H405356VXlkdUoAMLuDwAHaDn?rs=1&pid=ImgDetMain"
];

const SaleScroller = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow tech-slideshow">
      <div className="images" style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentImageIndex * (100 / images.length)}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
        {/* Duplicate the first image to achieve infinite sliding */}
        <img src={images[0]} alt={`Slide 1`} />
      </div>
    </div>
  );
};

export default SaleScroller;
