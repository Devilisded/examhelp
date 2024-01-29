"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";
import Card from "./Card";
import Autoplay from "embla-carousel-autoplay";

const Carousel = (props) => {
  const data = [
    {
      name:"Akshit",
      designation:"Developer",
      feedback:"I Am good at this how are you doing",
      image:"/images/client-pict.png"
    },
    {
      name:"Vimal",
      designation:"Developer",
      feedback:"I Am good at this how are you doing",
      image:"/images/client-pict2.png"
    },
    {
      name:"Sunil",
      designation:"Web Designer",
      feedback:"I Am good at this how are you doing",
      image:"/images/client-pict3.png"

    }
    ,    {
      name:"Harsh",
      designation:"Developer",
      feedback:"I Am good at this how are you doing",
      image:"/images/client-pict4.png"
    }
  ]
  const {  options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (


    
    <div className="embla lg:w-[50%]">
      
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          
          {data.map((item,index) => (
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
