//acts as a bulletin board of material, it can be components
//it can be images, etc. but make it look presentable
//generally, this should be pulling from a database, but implement
//that at a later time
import React, { useState, useEffect, useRef, ReactNode } from "react";

// Define the type for props to include children components
type CarouselProps = {
  items: ReactNode[]; // Accepts an array of ReactNode
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll to the active item
  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const { width } = carouselRef.current.getBoundingClientRect();
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
  };

  // Update active item at an interval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length]);

  // Scroll to the active item whenever it changes
  useEffect(() => {
    scrollToItem(activeIndex);
  }, [activeIndex]);

  return (
    <div
      ref={carouselRef}
      className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box"
      style={{ width: "100%", overflowX: "scroll" }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item flex justify-center items-center ${
            activeIndex === index ? "active" : ""
          }`}
          style={{ minWidth: "100%" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
