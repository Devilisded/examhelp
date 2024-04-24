"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const Carousel = (props) => {
  const data = [
    {
      name: "Calvin Hoffman",
      designation: "Developer",
      feedback:
        "I was freaking out trying to balance a heavy course load with my two jobs when my roommate told me about this service. I'm always worried about plagiarism, but they sent me a scanned report showing that each paper was 100% original.",
      image: "/images/test1.webp",
    },
    {
      name: "Marvin Poole",
      designation: "Developer",
      feedback:
        "As an older student with a family, having an assignment service as a backup has kept me from dropping out when things get hectic. Between parenting, appointments, household stuff - you name it - I cram in learning whenever I can spare a minute. When I just can't find enough hours to complete big projects alone, it's a huge relief knowing I can get assistance from professionals who understand what professors want. This service hasn't let me down yet!",
      image: "/images/test2.webp",
    },
    {
      name: "Pearl Coleman",
      designation: "Web Designer",
      feedback:
        "As someone working and attending nursing school, I need all the time-saving help I can get. This assignment service has written multiple evidence-based research papers for me on very short notice. They always assign me a writer who has medical expertise, too. My last paper earned one of the highest grades in my class! I'll return whenever I've got too much on my plate.",
      image: "/images/test3.webp",
    },
    {
      name: "Christian Car",
      designation: "Developer",
      feedback:
        "I can't complain about the programming homework help from this service. My tutor is patient and clearly explains concepts. Sometimes, the response to the queries may get a bit late, but they've come through when I've been stuck on tricky assignments.",
      image: "/images/test4.webp",
    },
    {
      name: "Patricia Presley",
      designation: "SEO Executive",
      feedback:
        "I used this service to help me with some math problems I was struggling with. The tutor they matched me with was friendly and knew his stuff. He explained the concepts in a simple way that I could understand. While my last assignment was delivered just in time, and because of that, I didn’t get enough time to analyze it. But thank god the quality of the assignment was so good that it got me good grades, overall, it helped me get unstuck to finish my homework.",
      image: "/images/test5.webp",
    },
  ];
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <div className="embla lg:w-[50%] md:w-[70%] w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container1">
          {data.map((item, index) => (
            <div className="embla__slide1 justify-center flex" key={index}>
              <Link href="/reviews">
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
                      {item.feedback}
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
