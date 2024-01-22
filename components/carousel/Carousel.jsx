"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";
import Card from "./Card";
import Autoplay from "embla-carousel-autoplay";

const Carousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <div className="embla lg:w-[70%]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide justify-center flex" key={index}>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
