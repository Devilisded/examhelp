import Image from "next/image";
import Footer from "@/components/footer/Footer";

import Navbar from "@/components/navbar/Navbar";
import Carousel from "@/components/carousel/Carousel";
import Number from "@/components/number/Number";
import {
  IconChevronDown,
  IconBrandJavascript,
  IconChartInfographic,
  IconCoins,
  IconDeviceLaptop,
  IconFlask2,
  IconGeometry,
  IconMath,
  IconUserCheck,
} from "@tabler/icons-react";
import { IconFilePlus } from "@tabler/icons-react";

import Hero from "@/components/hero/Hero";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="py-16 bg-white pb-20 ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
          <h2 className="text-2xl text-black font-bold justify-center items-center flex md:text-4xl  pb-10">
            About Exam Help Online
          </h2>
          <div className="grid lg:grid-cols-2 gap-2  items-center">
            <div>
              <Image
                src="/images/ab.webp"
                alt="img"
                width={600}
                height={600}
                className="rounded-full  lg:mt-24 lg:ml-4 "
                loading="lazy"
              />
            </div>
            <div>
              <p className="mt-4 text-black text-lg  ">
                Passing exams with high grades starts with having the right
                support. That's why we started this online exam help website -
                to give students like you customized help so you can pass your
                exams with confidence.
              </p>
              <p className="mt-4 text-black text-lg ">
                Our experienced tutors offer step-by-step exam prep tailored to
                your needs. We take the time to understand what you find
                difficult and easy to provide useful study tools, practice
                questions, and tips on taking tests.
              </p>
              <p className="mt-4 text-black text-lg ">
                We believe every student can do well if guided correctly. We
                want to provide that guidance, equip you with the tools to
                succeed, and watch you ace every exam that comes your way.
              </p>
              <p className="mt-4 text-black text-lg ">
                So don't struggle alone. With us supporting you, you'll gain
                confidence, get better marks, and move toward success one exam
                at a time!
              </p>

              <button
                type="submit"
                className="flex mt-6 w-52 justify-center rounded-md bg-orange-00 bg-orange-800 hover:bg-orange-900 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="container mx-auto">
          <div className="flex flex-wrap  mx-auto">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-blue-600 mb-2 block">
                  Pricing Table
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Pricing Plan
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
              <div
                className="
              bg-white
              rounded-xl
              relative
              z-10
              overflow-hidden
              border border-primary border-opacity-20
              shadow-pricing
              py-10
              px-8
              sm:p-12
              lg:py-10 lg:px-6
              xl:p-12
              mb-10
              "
              >
                <span className="text-blue-600 font-semibold text-lg block mb-4">
                  Executable Code
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                  $25
                  <span className="text-base text-body-color font-medium">
                    12 Hours to 3 Days
                  </span>
                </h2>
                <p
                  className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                >
                  Perfect for using in a personal website or a client project.
                </p>
                <div className="mb-7">
                  <p className="text-base text-body-color leading-loose mb-1">
                    Course Access
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Online Examination
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Free Teacher Consulting
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Automatic Cloud Backups
                  </p>
                </div>
                <span
                  className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-blue-600
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-blue-600 hover:border-bg-blue-600
                  transition
                  "
                >
                  Choose Personal
                </span>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      ></circle>
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                          <stop
                            offset="1"
                            stopColor="#C4C4C4"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      ></circle>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
              <div
                className="
              bg-white
              rounded-xl
              relative
              z-10
              overflow-hidden
              border border-primary border-opacity-20
              shadow-pricing
              py-10
              px-8
              sm:p-12
              lg:py-10 lg:px-6
              xl:p-12
              mb-10
              "
              >
                <span className=" text-blue-600 font-semibold text-lg block mb-4">
                  Well-Commented Code
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                  $30
                  <span className="text-base text-body-color font-medium">
                    12 Hours to 3 Days
                  </span>
                </h2>
                <p
                  className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                >
                  Perfect for using in a Business website or a client project.
                </p>
                <div className="mb-7">
                  <p className="text-base text-body-color leading-loose mb-1">
                    Course Access
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Online Examination
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Free Teacher Consulting
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Automatic Cloud Backups
                  </p>
                </div>
                <span
                  className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-white
                  bg-blue-600
                  border border-bg-blue-600
                  rounded-md
                  text-center
                  p-4
                  hover:bg-opacity-90
                  transition
                  "
                >
                  Choose Business
                </span>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      ></circle>
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                          <stop
                            offset="1"
                            stopColor="#C4C4C4"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      ></circle>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
              <div
                className="
              bg-white
              rounded-xl
              relative
              z-10
              overflow-hidden
              border border-primary border-opacity-20
              shadow-pricing
              py-10
              px-8
              sm:p-12
              lg:py-10 lg:px-6
              xl:p-12
              mb-10
              "
              >
                <span className=" text-blue-600 font-semibold text-lg block mb-4">
                  Well-Commented Code& Report
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                  $256
                  <span className="text-base text-body-color font-medium">
                    12 Hours to 5 Days
                  </span>
                </h2>
                <p
                  className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                >
                  Perfect for using in a Professional website or a client
                  project.
                </p>
                <div className="mb-7">
                  <p className="text-base text-body-color leading-loose mb-1">
                    Course Access
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Online Examination
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Free Teacher Consulting
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Automatic Cloud Backups
                  </p>
                </div>
                <span
                  className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-blue-600
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-blue-600 hover:border-blue-600
                  transition
                  "
                >
                  Choose Professional
                </span>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      ></circle>
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.09"></stop>
                          <stop
                            offset="1"
                            stopColor="#C4C4C4"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      ></circle>
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      ></circle>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Number />
      <div className="w-full cbg">
        <div className="w-full">
          <div className="z-50 text-center mx-auto max-w-[510px]">
            <h2 className=" font-bold  text-3xl sm:text-4xl  md:text-[40px]  text-white z-50 ">
              Testimonials
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <Carousel />
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2  w-auto object-contain lg:col-span-1 "
              src="/images/uni1.webp"
              alt="logo1"
              width={158}
              height={48}
              loading="lazy"
            />
            <Image
              className="col-span-2  w-auto object-contain lg:col-span-1"
              src="/images/logo-un2.webp"
              alt="logo2"
              width="158"
              height="48"
              loading="lazy"
            />
            <Image
              className="col-span-2  w-auto object-contain lg:col-span-1"
              src="/images/logo-un3.webp"
              alt="logo3"
              width="158"
              height="48"
            />
            <Image
              className="col-span-2  w-auto object-contain sm:col-start-2 lg:col-span-1"
              src="/images/logo-un4.webp"
              alt="logo4"
              width="158"
              height="48"
              loading="lazy"
            />
            <Image
              className="col-span-2 col-start-2 w-auto object-contain sm:col-start-auto lg:col-span-1"
              src="/images/logo-un5.webp"
              alt="logo5"
              width="158"
              height="48"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="px-3 md:px-40   border-t border-b py-20 bg-opacity-10">
        <div id="services" className="flex flex-wrap ">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-blue-600 mb-2 block">
                Exam help Online
              </span>
              <h2 className="   font-bold   text-3xl   sm:text-4xl   md:text-[40px]   text-dark   mb-4   ">
                Our Services
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
              <IconChartInfographic />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Statistics Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Statistical exams covering probability, data analysis,
              interpreting information, and testing theories can be challenging.
              But our statistics exam help can prepare you to tackle these
              difficult tests successfully.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Our selected statistics experts provide step-by-step video
              explanations to learn from solved examples. Access a cheat sheet
              listing must-know formulas and theories to help solve questions
              faster. Use custom study guides we create outlining main focus
              topics, key concepts, and practice questions tailored to your
              specific exam.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
              <IconFilePlus />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Nursing Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Nursing students must study anatomy, medicines, illnesses, and how
              the body works. Then, passing hard nursing exams on top of that is
              tough. But our nursing exam help is here for you.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Work one-on-one with tutor nurses to make exam preparation easier
              for tests like NCLEX-RN, HESI, ATI TEAS, and more. Go through
              example questions and get tips to master test-taking tactics. Use
              cheat sheets and shortened study guides to refresh concepts you
              need to know quickly. Stuck on a procedure, disease, or medicine
              dose math? Our nursing experts will help you.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With experienced nurses guiding your study, you’ll finally
              understand those tricky nursing ideas instead of feeling
              overwhelmed. This gives confidence to ace exams. Soon, good grades
              become normal and not so hard.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
              <IconUserCheck />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Accounting Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Accounting exams full of number problems, journal entries, and
              complex math can make anyone anxious or lose sleep. But you can
              get expert help for this. Our accounting exam help is made for
              you.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Get support from qualified accounting tutors to learn concepts for
              tests like CPA, CA, ACCA, CMA, and more. Work through practice
              questions tailored to your exam board until you can confidently
              solve accounting issues.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With an experienced accounting mentor guiding you, exam prep gets
              less scary. You’ll know how to methodically tackle complex
              accounting questions without feeling nervous. This gives the
              confidence required to excel. Soon, top grades can become normal
              for you!
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
              <IconMath />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Math Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Math exams testing formulas, theories, complex ideas, and
              problem-solving can be hard. But learning math becomes easier with
              the right help made for your needs.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Our math exam assistance offers 1-on-1 guidance to simplify the
              challenges you face. Work through solutions to tough practice
              questions until ideas click for you.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With an expert math mentor helping you, you'll finally understand
              how to systematically tackle and solve questions instead of
              feeling overwhelmed. This builds the logic and confidence required
              for excelling on math tests.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
              <IconDeviceLaptop />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Computer Science Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With difficult computer science exams covering complex topics like
              data structures, algorithms, programming languages, and databases,
              feeling overwhelmed is common. However, personalized help can ease
              the pressure.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Our computer science exam assistance offers 1-on-1 support so you
              can confidently tackle any test. Review practice questions and get
              tips from expert tutors who know how to succeed on CS exams.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With a knowledgeable CS mentor guiding your prep, you'll finally
              comprehend intricate ideas instead of memorizing surface facts.
              This builds the specialized skills and confidence needed for
              computer science exam success.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
              <IconCoins />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Finance Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Finance exams can be extremely demanding with complex concepts
              like investment evaluation, portfolio management, asset valuation,
              and hard math calculations. But you don’t have to feel anxious
              tackling them alone. Our finance exam help is here for you.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Get 1-on-1 support from qualified finance tutors to understand key
              CFA, CPA, ACCA exams, and more concepts. Work through tailored
              practice questions until you can confidently solve finance
              problems.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With an experienced finance mentor guiding your prep, you’ll
              finally comprehend complex ideas without feeling nervous. This
              builds the specialized analytical skills and confidence required
              for finance exam excellence.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
              <IconBrandJavascript />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Java Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Java exams can certainly be intimidating with tricky concepts like
              inheritance, polymorphism, handling errors, and working with data
              structures being tested. But with personalized 1-on-1 guidance
              matched to your learning needs, passing Java exams seems much less
              scary.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Our Java exam help offers tailored mentoring, so you grasp key
              theory through simplified examples and practical coding exercises.
              Work through practice multiple choice questions on beginner and
              advanced Java one step at a time.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With an expert Java programmer assisting your tailored test prep,
              you’ll find that concepts stick faster. Soon, object-oriented
              design, generics, multithreading, and collections will start
              coming more naturally.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
              <IconFlask2 />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Chemistry Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Dealing with challenging chemistry concepts like atomic structure,
              chemical bonding, thermodynamics, organic reactions, and more,
              along with difficult exams, can be overwhelming. But we’re here to
              help!
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Our chemistry exam helps provide 1-on-1 online tutoring customized
              to your needs. Work with handpicked chemistry experts to clarify
              your doubts about tricky concepts. Walk through practice questions
              together step-by-step to improve.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With an experienced chemistry tutor guiding you, topics become
              less baffling and easier to understand. This builds the competence
              and self-belief needed to confidently tackle any chemistry test
              situation.
            </p>
          </div>

          <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
              <IconGeometry />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Geometry Exam Help
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Dealing with geometry theorems, postulates, shapes, proofs,
              problem-solving, and tough exams can be challenging. But you don’t
              have to feel stuck or tackle it alone! Our geometry exam help is
              here.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Get 1-on-1 geometry tutoring tailored to your exact needs. Work
              with expert geometry tutors to clarify your questions on angles,
              triangles, quadrilaterals, and 3D shapes. Walk through practice
              geometry problems step-by-step with an expert until the concepts
              click.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              With an experienced geometry tutor assisting you, challenging
              concepts will start making more sense, building knowledge and
              confidence. You'll be able to tackle constructions, area & volume
              questions, and proofs more competently.
            </p>
          </div>
        </div>

        <div className="w-full bg-indigo-600 shadow-xl shadow-indigo-200 py-10 md:px-20 px-5 flex justify-between items-center">
          <div className=" text-white">
            <div className="text-4xl font-medium">Still Confused ?</div>
            <div className="text-lg">
              Book For Free Career Consultation Today !{" "}
            </div>
          </div>
          <button className="md:px-5 md:py-3 py-1 px-1 font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen py-6 mb-8">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
          <p className="text-neutral-500 text-xl mt-3">
            Frequenty asked questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
          <div className="py-5 w-full">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span> Do exams online provide help for online exams?</span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, we do provide expert assistance for online examinations.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span>
                  {" "}
                  Is your service available in the United States Of America?
                </span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, we do provide our online exam help service in the United
                States of America
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span>
                  {" "}
                  Can you help me with the exam with 1 day remaining?
                </span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, we can help you with your exam despite the tightest
                deadlines.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span>
                  Does online examination assist in working things out?
                </span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, online exam help does work. Although it may seem
                unbelievable, you stand a better chance of obtaining excellent
                grades when professionals offer you full support during the
                examination.
              </p>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
