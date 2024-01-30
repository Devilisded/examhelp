"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";
import Card from "./Card";
import Autoplay from "embla-carousel-autoplay";

const Carousel = (props) => {
  const data = [
    {
      name: "Akshit",
      designation: "Developer",
      feedback: "I Am good at this, how are you doing",
      image: "/images/test1.webp",
    },
    {
      name: "Sunil",
      designation: "Developer",
      feedback: "I Am good at this, how are you doing",
      image: "/images/test2.webp",
    },
    {
      name: "Vimal",
      designation: "Web Designer",
      feedback: "I Am good at this, how are you doing",
      image: "/images/test3.webp",
    },
    {
      name: "Harsh",
      designation: "Developer",
      feedback: "I Am good at this, how are you doing",
      image: "/images/test4.webp",
    },
    {
      name: "Ritik",
      designation: "SEO Executive",
      feedback: "They are the best ",
      image: "/images/test5.webp",
    },
  ];
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <div className="embla lg:w-[50%] md:w-[70%] w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item, index) => (
            <div className="embla__slide justify-center flex" key={index}>
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
