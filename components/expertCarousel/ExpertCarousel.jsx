"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "./embla.css";

const ExpertCarousel = () => {
  const options = "";
  const slides = [
    {
      name: "Jenny Bootham",
      description:
        "I acquired my doctorate in Computer Science from the Swinburne University of Technology Sarawak. I specialize in IT Write-Up. I am a post-doctoral research fellow at Yale University.",
      stars: 5,
      subject: "Computer Science",
      img: "/images/ex.webp",
    },
    {
      name: "Manal Chiguerr",
      description:
        "My work ethic is of a relaxed yet extremely efficient nature, as I believe that a stressed worker is an inefficient worker; I, therefore, like to stay as organized and as up to date as possible.",
      stars: 4,
      subject: "Nursing",
      img: "/images/ex1.webp",
    },
    {
      name: "Cameron Collins",
      description:
        "I hold a Ph.D. in history, which has given me extensive experience in academic writing and research. My work has been published in peer reviewed academic journals and popular publications.",
      stars: 4,
      subject: "History",
      img: "/images/ex2.webp",
    },
    {
      name: "Rishab Pant",
      description:
        "I spent 15 years in public education, teaching high school mathematics for the first 6.5 years followed by 8.5 years of the building-level administration.",
      stars: 5,
      subject: "Marketing",
      img: "/images/ex3.webp",
    },
    {
      name: "Gabriel Walker",
      description:
        "I am Australian ghostwriter of a reputed digital marketing firm. I am a resident of Brisbane and has done his higher education from the University of Melbourne.",
      stars: 4,
      subject: "History",
      img: "/images/ex4.webp",
    },
    {
      name: "Vishal Bhadwaj",
      description:
        "I am an experienced finance professional with excellent writing, research and analysis capabilities. I have +6 years of professional work experience as an Auditor and Financial Analyst at Deloitte, KPMG and a NASDAQ registered Company.",
      stars: 4,
      subject: "Accounting",
      img: "/images/ex5.webp",
    },
  ];
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <section className="emblaE w-[80%] lg:w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative flex  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-400 shadow-none">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <p className="block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased">
                        {item.name}
                      </p>
                      <div className="5 flex items-center gap-0">
                        {Array.from(Array(item.stars).keys()).map(
                          (item, index) => (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-5 w-5 text-yellow-400"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          )
                        )}
                      </div>
                    </div>
                    <p className="block font-sans text-base font-light leading-relaxed text-gray-900 antialiased">
                      {item.subject}
                    </p>
                  </div>
                </div>
                <div className="mb-6 p-0">
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertCarousel;
