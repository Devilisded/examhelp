"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";
import Image from "next/image";
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
              <div className="flex flex-col items-center mx-12 lg:mx-0 text-gray-300">
                <div>
                  <Image
                    src={item.image}
                    width={300}
                    height={300}
                    className="rounded-full w-32 h-32 object-cover"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 text-gray-400"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic text-wrap">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 text-gray-400"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg bg-orange-400"></span>
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
