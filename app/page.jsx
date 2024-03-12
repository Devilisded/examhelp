import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Carousel from "@/components/carousel/Carousel";
import Number from "@/components/number/Number";
import {
  IconChevronDown,
  IconClock2,
  IconGraph,
  IconWorld,
  IconReportAnalytics,
  IconPigMoney,
  IconChartInfographic,
  IconStethoscope,
  IconBriefcase,
  IconMath,
  IconDeviceDesktop,
  IconReportMoney,
  IconCoffee,
  IconMicroscope,
} from "@tabler/icons-react";

import Hero from "@/components/hero/Hero";
import { IconSchool } from "@tabler/icons-react";
import Head from "next/head";
import ExpertCarousel from "@/components/expertCarousel/ExpertCarousel";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div className="m-0">
      <Navbar />
      <Hero />
      <section>
        <div className="container mx-auto flex flex-col md:flex-row items-center md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-2xl text-blue-600 tracking-loose">
              Exam Help Online
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              About Us
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Passing exams with high grades starts with having the right
              support. That's why we started this online exam help website to
              give students like you customized help so you can pass your exams
              with confidence. Our experienced tutors offer step-by-step exam
              prep tailored to your needs. We take the time to understand what
              you find difficult and easy to provide useful study tools,
              practice questions, and tips on taking tests.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-blue-600 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="flex gap-10 h-[400px] justify-center">
              <div className="hidden xl:block rounded-full w-1/4  overflow-hidden rotate-[-20deg] object-cover">
                <img
                  className="h-full  object-cover"
                  src="/images/about1.avif"
                />
              </div>
              <div className=" hidden xl:block rounded-full w-1/4  overflow-hidden rotate-[-20deg] object-cover">
                <img
                  className="h-full hidden xl:block object-cover"
                  src="/images/about2.avif"
                />
              </div>
              <div className="xl:rounded-full xl:w-1/4  xl:overflow-hidden xl:rotate-[-20deg] object-cover">
                <img
                  className="h-full object-cover"
                  src="/images/about3.avif"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-5 items-center py-10">
        <div className="flex flex-wrap  lg:w-[80%] w-[95%]">
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
        <div className="flex flex-wrap justify-center lg:w-[80%] w-[95%]">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 md:mx-0 mx-4">
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
                $45
                <span className="text-base text-body-color font-medium">
                  1 Hour
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
                1:1 Live Session
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Short Queries
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Top Rated Tutors
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Live Lesson Recording
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Same Tutor for all Sessions
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
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 md:mx-0 mx-4">
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
                $90
                <span className="text-base text-body-color font-medium">
                  2 Hour
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
                1:1 Live Session
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Complex Queries
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Top Rated Tutors
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Live Lesson Recording
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Same Tutor for all Sessions
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
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 md:mx-0 mx-4">
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
                $125
                <span className="text-base text-body-color font-medium">
                  3 Hour
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
                Perfect for using in a Professional website or a client project.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                1:1 Live Session
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Advance Queries
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Top Rated Tutors
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Live Lesson Recording
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Same Tutor for all Sessions
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
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 md:mx-0 mx-4">
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
                $160
                <span className="text-base text-body-color font-medium">
                  4 Hours
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
                Perfect for using in a Professional website or a client project.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                1:1 Live Session
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Advance Queries
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Top Rated Tutors
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Live Lesson Recording
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                Same Tutor for all Sessions
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

      <div className="py-10 flex flex-col gap-14">
        <h2 className="font-bold md:text-4xl text-3xl tracking-tight text-center ">
          Top 6 Benefits Of Choosing Our Online Exam Help
        </h2>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 w-[80%] gap-10">
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconClock2 />
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Save Time
              </h1>
              <p className="text-gray-500 dark:text-gray-300 text-balance">
                Taking exams on your own can be hugely time-consuming. Between
                studying content, practicing questions, and taking the exam,
                exams can take up much precious time. Our service takes the exam
                burden off your shoulders so you can allocate that time to other
                priorities. From start to finish, we streamline everything to
                save you the maximum time.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconSchool />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Domain Expertise
              </h1>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                Unlike general tutoring services, our online tutors are niche
                subject matter experts. They have extensive education and
                real-world experience in their specific exam domain. This means
                they have the greatest depth of knowledge to tackle any topic or
                question within their field, lending you their insight and
                guidance throughout your exam.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconGraph />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Customized Assistance
              </h1>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                We provide a fully personalized 1-on-1 exam assistance service
                tailored to your needs. Before your exam session, your tutor
                will consult with you to understand your strengths and
                weaknesses. This allows them to custom-craft potential
                questions, practice problems, explanations, and learning
                strategies just for you. It's like having a private tutor
                designing a fully customized study plan to help you succeed.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconWorld />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Worldwide Access
              </h1>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                As an online platform, we allow you to connect with expert
                tutors remotely. That means you can get expert exam help from
                the comfort of your home, from a library, while traveling -
                anywhere with internet access! No need to commute or travel to
                appointments. Just log in online at your convenience to start
                your tutoring.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconReportAnalytics />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Secure Service
              </h1>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                We invest heavily in security measures like end-to-end
                encryption, stringent privacy policies, and authentication
                protocols to protect your data. <br /> Exam integrity is vital,
                so our top priority is safeguarding your information during
                online exam assistance.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                <IconPigMoney />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Affordable Pricing
              </h1>

              <p className="text-gray-500 dark:text-gray-300 text-balance">
                Our rates are designed for students on a budget. Pay just a
                fraction of what expensive private tutoring normally costs.
                Without geographical or access restrictions, we connect you to
                specialists globally to find great tutors at affordable prices
                for all educational levels and subjects. Our platform allows
                tutors to set reasonable rates, keeping pricing competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-4xl text-center font-semibold mb-10">
          Our Experts
        </h1>
        <ExpertCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <Number />

      <div className="flex flex-col gap-10 py-10 items-center">
        <h2 className="font-bold md:text-4xl text-3xl tracking-tight text-slate-700 block lg:hidden w-[95%] lg:w-[75%]">
          Expert Assistance On Exam Help Online - Chat Now!
        </h2>
        <div className="flex justify-center">
          <div className="flex lg:flex-row flex-col-reverse gap-5 w-[95%] lg:w-[75%]">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold md:text-4xl text-3xl tracking-tight text-slate-700 hidden lg:block">
                Expert Assistance On Exam Help Online - Chat Now!
              </h2>
              <div className="flex justify-center">
                <div className="text-slate-700">
                  Exams are a stressful and challenging experience for many
                  students, especially when students cannot prepare well for
                  their exams for any reason. However, getting the right
                  guidance and support can make all the difference. <br />{" "}
                  <br /> Our online exam help service provides expert assistance
                  so you feel confident and prepared when test day arrives. They
                  can provide real-time answers through live chat and messaging
                  as you study or review practice questions. Our team holds
                  advanced degrees that they leverage to simplify difficult
                  material using proven teaching methods. <br /> <br /> We
                  connect students with tutors with years of experience helping
                  pupils succeed on exams. Whether you're struggling with
                  complex concepts or just want someone to help you create an
                  effective study plan, our tutors offer personalized support
                  customized to your needs. With our help in understanding key
                  subject matter, practicing responses, and developing time
                  management abilities, you will walk into your exam equipped
                  with the knowledge and skills needed to do your best.
                </div>
              </div>
            </div>
            <img
              src="/images/content.avif"
              alt=""
              className="lg:w-1/2 w-full object-cover rounded flex-1"
            />
          </div>
        </div>
        <div className="flex items-center flex-col gap-5">
          <h2 className="font-bold md:text-4xl text-3xl tracking-tight  text-blue-900 block lg:hidden w-[95%] lg:w-[75%]">
            Wondering About How Exam Help Online Works?
          </h2>
          <div className="flex lg:flex-row flex-col w-[95%] lg:w-[75%] gap-5">
            <img
              src="/images/content2.avif"
              alt=""
              className="lg:w-1/2 w-full object-cover  rounded"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold md:text-4xl text-3xl tracking-tight  text-blue-900 hidden lg:block">
                Wondering About How Exam Help Online Works?
              </h2>
              <div className="flex justify-center ">
                <div className=" text-slate-700">
                  If you are wondering how our online exam help works? Our
                  service uses new technology and a group of expert tutors to
                  give you custom help for any exam you're taking. <br />
                  <br />
                  When you sign up, we'll match you with a tutor who knows about
                  your exam subject. You can then work one-on-one with them on
                  our online platform. <br /> <br />
                  They'll help you understand hard concepts, walk through
                  practice questions, pinpoint areas you need to work on and
                  make a plan to ace the real test. <br />
                  Your tutor will be there to guide you through prepping for
                  your exam. This way, you'll feel ready and confident when test
                  day comes. <br /> <br /> And the best part is all the tutoring
                  happens online through our website. So you can get the exam
                  support you need from anywhere with the internet. <br />
                  Whether you struggle with tough material or want someone to
                  help you learn your best, our online exam help has covered
                  you.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-5">
          <h2 className="font-bold md:text-4xl text-3xl tracking-tight  text-blue-900 block lg:hidden w-[95%] lg:w-[75%]">
            Get Premium Exam Help Online Anywhere - Anytime From Our Platform!
          </h2>
          <div className="flex lg:flex-row flex-col-reverse w-[95%] lg:w-[75%] gap-5">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold md:text-4xl text-3xl tracking-tight  text-blue-900 hidden lg:block">
                Get Premium Exam Help Online Anywhere - Anytime From Our
                Platform!
              </h2>
              <div className="flex justify-center ">
                <div className=" text-slate-700">
                  Our online platform allows students to get expert test help
                  anytime, anywhere. <br /> Whether you need help studying for
                  an upcoming test, understanding hard topics, or want feedback
                  on your essays, our platform connects you with qualified
                  tutors in real-time through chat and video calls. <br />{" "}
                  <br />
                  We understand how busy students are. Our goal is to offer
                  affordable support that goes beyond just giving answers. With
                  tutors available 24/7, quick connections, and flexible
                  packages, students can get specialized test help that suits
                  their schedule. <br /> This user-friendly platform is designed
                  to set up students for success. <br /> <br />
                  Fill out the form above to connect with top-rated tutors and
                  quality study materials to confidently prepare for your next
                  test.
                </div>
              </div>
            </div>
            <img
              src="/images/content3.avif"
              alt=""
              className="lg:w-1/2  w-full rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-full cbg ">
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
      <div className="bg-white py-10">
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
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="md:flex md:items-center">
            <div className="md:flex items-end">
              <div className="w-full space-y-12">
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-4xl">
                    Features
                  </h1>

                  <div className="mt-2">
                    <span className="inline-block w-1 h-1 mr-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mr-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                      <IconChartInfographic />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        Statistics Exam Help
                      </h1>

                      <p className="mt-3 text-gray-500 dark:text-gray-300 text-balance">
                        Statistics exams are tough, but our step-by-step video
                        explanations, cheat sheets, personalized study guides,
                        and experts help prepare you to ace probability
                        confidently, data analysis, theory testing, and
                        information interpretation questions.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                      <IconStethoscope />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        Nursing Exam Help
                      </h1>

                      <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Nursing exams like NCLEX-RN, HESI, and ATI TEAS can make
                        you struggle, but our expert nurse tutors provide
                        one-on-one help, cheat sheets, study guides, and
                        test-taking tips. With personalized guidance, complex
                        nursing concepts become understandable, boosting
                        confidence to ace exams.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                      <IconBriefcase />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        Accounting Exam Help
                      </h1>

                      <p className="mt-3 text-gray-500 dark:text-gray-300">
                        You can face a hard time in Accounting exams like CPA,
                        CA, ACCA, and CMA, but our expert tutors provide
                        personalized guidance, practice questions, and
                        mentorship. Their support clarifies complex accounting
                        concepts, building confidence to tackle questions and
                        excel methodically without anxiety.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                      <IconMath />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        Math Exam Help
                      </h1>

                      <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Math exams with formulas, theories, and complex
                        problem-solving are topics you will surely need a
                        helping hand to master. Our personalized math exam
                        assistance provides expert 1-on-1 mentoring, practice
                        questions, and systematic solution guidance, helping you
                        understand and tackle challenges confidently without
                        feeling overwhelmed.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                      <IconDeviceDesktop />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        Computer Science Exam Help
                      </h1>

                      <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Struggling with complex computer science exams on data
                        structures, algorithms, programming, and databases? Our
                        personalized 1-on-1 tutoring, practice questions, and
                        expert guidance help you deeply comprehend intricate CS
                        concepts, building specialized skills and confidence to
                        excel without feeling overwhelmed.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                      <IconReportMoney />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        Finance Exam Help
                      </h1>

                      <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Troubled by complex finance exams like CFA, CPA, and
                        ACCA with investment analysis, portfolio management,
                        valuation, and calculations? Our personalized 1-on-1
                        tutoring, practice questions, and expert mentorship help
                        you deeply grasp intricate finance concepts, building
                        specialized analytical skills and confidence to excel
                        without anxiety.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                      <IconCoffee />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        Java Exam Help
                      </h1>

                      <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Java exams with tricky inheritance, polymorphism, error
                        handling, and data structures seem terrifying. However,
                        our personalized 1-on-1 guidance, tailored examples,
                        coding exercises, and expert mentorship ensure concepts
                        like OOP, generics, multithreading, and collections
                        become clearer, boosting confidence for multiple-choice
                        questions.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                      <IconMicroscope />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        Chemistry Exam Help
                      </h1>

                      <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Struggling with challenging chemistry concepts like
                        atomic structure, bonding, thermodynamics, and organic
                        reactions? Our personalized 1-on-1 online tutoring with
                        handpicked experts clarifies doubts, provides
                        step-by-step practice, and builds competence. With
                        tailored guidance, complex topics become understandable,
                        boosting confidence for chemistry exams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center py-10">
        <div className="flex flex-wrap gap-8 w-[80%] lg:gap-0">
          <div className=" w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12 ">
              <img
                src="/images/content4.avif"
                className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                alt="image"
              />
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-blue-600 p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-8 text-3xl font-bold">
                  Expert Assistance On Exam Help Online - Chat Now!
                </h2>
                <p className="text-balance">
                  Exams are a stressful and challenging experience for many
                  students, especially when students cannot prepare well for
                  their exams for any reason. However, getting the right
                  guidance and support can make all the difference. Our online
                  exam help service provides expert assistance so you feel
                  confident and prepared when test day arrives. We connect
                  students with tutors with years of experience helping pupils
                  succeed on exams. Whether you're struggling with complex
                  concepts or just want someone to help you create an effective
                  study plan, our tutors offer personalized support customized
                  to your needs. They can provide real-time answers through live
                  chat and messaging as you study or review practice questions.
                  Our team holds advanced degrees that they leverage to simplify
                  difficult material using proven teaching methods. With our
                  help in understanding key subject matter, practicing
                  responses, and developing time management abilities, you will
                  walk into your exam equipped with the knowledge and skills
                  needed to do your best. So, reduce your stress and work
                  one-on-one with an expert tutor today - just chat with us now
                  to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQs</h2>
          <p className="text-neutral-500 text-xl mt-3">
            Frequenty Asked Questions
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
