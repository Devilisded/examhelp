import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Carousel from "@/components/carousel/Carousel";

import {
  IconClock2,
  IconGraph,
  IconWorld,
  IconReportAnalytics,
  IconPigMoney,
} from "@tabler/icons-react";

import { IconSchool } from "@tabler/icons-react";

const Service = () => {
  return (
    <div>
      <meta name="robots" content="noindex,nofollow" />

      <Navbar />
      <Hero />
      <div className="flex flex-col gap-5 items-center py-10">
        <div className="flex flex-wrap  lg:w-[80%] w-[95%]">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-blue-600 mb-2 block">
                Pricing Table
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
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
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:mx-0 mx-4">
            <div className=" bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
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
                Perfect for using in a Professional website or a client project.
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

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <div className="container my-24 mx-auto md:px-6">
        <section className=" container mb-32">
          <h1 className="mb-4 text-3xl font-bold">
            An intriguing title for an interesting article
          </h1>

          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            sapiente molestias consectetur. Fuga nulla officia error placeat
            veniam, officiis rerum laboriosam ullam molestiae magni velit
            laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Optio sapiente molestias
            consectetur. Fuga nulla officia error placeat veniam, officiis rerum
            laboriosam ullam molestiae magni velit laborum itaque minima
            doloribus eligendi!
          </p>

          <p className="mb-6">
            <strong>Optio sapiente molestias consectetur?</strong>
          </p>

          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            architecto ex ab aut tempora officia libero praesentium, sint id
            magnam eius natus unde blanditiis. Autem adipisci totam sit
            consequuntur eligendi.
          </p>

          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero repellat molestiae aperiam laborum aliquid atque magni
            nostrum, inventore perspiciatis possimus quia incidunt maiores
            molestias eaque nam commodi! Magnam, labore.
          </p>

          <img
            src="/images/content2.avif"
            className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
            alt=""
          />

          <ul className="mb-6 list-inside list-disc">
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Amet</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            temporibus nulla voluptatibus accusantium sapiente doloremque.
            Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
            nostrum in accusantium dolore veritatis eius est?
          </p>

          <h1 className="mb-6 text-3xl font-bold">
            An intriguing title for an interesting article
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            harum tempore cupiditate asperiores provident, itaque, quo ex iusto
            rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
            sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
            soluta labore! Expedita quas, nesciunt similique autem, sunt,
            doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
            Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
            ducimus consequatur corporis, architecto nesciunt vitae ipsum
            consequuntur perspiciatis nulla esse voluptatem quos dolorum
            delectus similique eum vero in est velit quasi pariatur blanditiis
            incidunt quam.
          </p>

          <div className="py-10 flex flex-col gap-14">
            <h2 className="font-bold md:text-4xl text-3xl tracking-tight text-center ">
              SERVICES EXAM HELP
            </h2>
            <div className="container my-10 mx-auto md:px-6">
              <div className="grid md:grid-cols-3 w-[100%] gap-10">
                <div className="space-y-3">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                    <IconClock2 />
                  </span>
                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Statistics Exam Help
                  </h1>
                  <p className="text-gray-500 dark:text-gray-300 text-balance">
                    Statistics is a branch of mathematics that deals with the
                    collection, analysis, interpretation, and presentation of
                    masses of numerical data. It's not easy to study statistics
                    and become proficient in all statistics techniques and
                    methods of analysis of large datasets. To be an expert in
                    statistics, you must have good command in Mathematics, along
                    with a basic knowledge of Economics.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                    <IconSchool />
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Nursing Exam Help
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300 text-balance">
                    Medical students mostly need nursing exam help. Nursing is
                    an occupation for health care. It focuses on the caring of
                    persons, children, and societies; so that they can stay fit
                    or improve their health. As a medical student, they are
                    required to cover medical documents, healthcare-related
                    subjects. Students face problems while they have an online
                    nursing exam.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                    <IconGraph />
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Accounting Exam Help
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300 text-balance">
                    The accounting process includes summarizing, analyzing, and
                    reporting financial transactions to oversight agencies,
                    regulators, and tax collection entities. The definition of
                    accounting is the process of recording and managing
                    financial accounts properly in a systematic way. Preparing a
                    Profit and Loss Statement is an example of accounting.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                    <IconWorld />
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Math Exam Help
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300 text-balance">
                    The process of getting help from over services is very
                    simple, you need to let us know all the required details for
                    your exam, and we will discuss it with our mathematics exams
                    expert, then we will quote you our expected price based on
                    the length of the paper and complexity of questions in the
                    exam. Don't worry about the price; we have kept our costs
                    very reasonable. After that, you can pay us for your exam by
                    using safe payment methods, and we will schedule the best
                    suitable mathematics expert who can take your exam on time
                    and answer all the questions asked correctly to help you get
                    the best grades.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                    <IconReportAnalytics />
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Computer Science Exam Help
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300 text-balance">
                    Computer science is the most demanding field in this era.
                    Everything is changing to digitalization resulting in demand
                    for the proper blend of software with technologies. Because
                    of this, students prefer to pursue their degree in computer
                    science and its sub-discipline field. For getting the
                    degree, they have to clear the exams. So, there might be the
                    possibility that they look for the best computer science
                    exam help. The reason can be that students do not have
                    enough knowledge of their core subjects, do not have enough
                    time, and many more.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                    <IconPigMoney />
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Finance Exam Help
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300 text-balance">
                    Finance is a broad term that describes banking, leverage or
                    debt, credit, capital markets, money, and investments.
                    Finance represents money management and the process of
                    acquiring needed funds—finance deals in Business funds,
                    budgets, values, risks, investments, and strategies. The
                    simplest definition of Finance is to provide money or credit
                    for something. An example of Finance is the bank giving a
                    loan to someone to purchase a house. The purpose of Finance
                    is to help people save, manage, and raise money. Finance
                    needs to have its purpose enunciated and accepted.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="mb-6 text-3xl font-bold">
            An intriguing title for an interesting article
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            harum tempore cupiditate asperiores provident, itaque, quo ex iusto
            rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
            sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
            soluta labore! Expedita quas, nesciunt similique autem, sunt,
            doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
            Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
            ducimus consequatur corporis, architecto nesciunt vitae ipsum
            consequuntur perspiciatis nulla esse voluptatem quos dolorum
            delectus similique eum vero in est velit quasi pariatur blanditiis
            incidunt quam.
          </p>

          <h1 className="mb-6 text-3xl font-bold">
            An intriguing title for an interesting article
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            harum tempore cupiditate asperiores provident, itaque, quo ex iusto
            rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
            sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
            soluta labore! Expedita quas, nesciunt similique autem, sunt,
            doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
            Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
            ducimus consequatur corporis, architecto nesciunt vitae ipsum
            consequuntur perspiciatis nulla esse voluptatem quos dolorum
            delectus similique eum vero in est velit quasi pariatur blanditiis
            incidunt quam.
          </p>
        </section>
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

      <Footer />
    </div>
  );
};

export default Service;
