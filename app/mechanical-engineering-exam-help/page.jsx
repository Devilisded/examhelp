import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceHero from "@/components/serviceHero/ServiceHero";
import ExpertCarousel from "@/components/expertCarousel/ExpertCarousel";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";

import {
  IconClock2,
  IconGraph,
  IconWorld,
  IconReportAnalytics,
  IconPigMoney,
  IconChevronDown,
} from "@tabler/icons-react";
import Link from "next/link";
import { IconSchool } from "@tabler/icons-react";
export const metadata = {
  title: "Mechanical Engineering Exam Help: Pass your exam with Pride",
  description:
    "Conquer your Mechanical Engineering Exams! Get assured Mechanical Engineering Exam Help from certified experts. Acing your exams is just a click away. Act Now!",
  openGraph: {
    title: "Mechanical Engineering Exam Help: Pass your exam with Pride",
  },
};
const Page = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://examhelp.online/mechanical-engineering-exam-help"
      />
      <Navbar />

      <ServiceHero
        title="Mechanical Engineering Exam Help Is Just A Click Away"
        desc="Conquer your Mechanical Engineering Exams! Get assured Mechanical Engineering Exam Help from certified experts. Acing your exams is just a click away. Act Now!"
      />
      <div
        className="flex flex-col gap-5 items-center pt-10"
        id="pricing_section"
      >
        <div className="flex flex-wrap  lg:w-[80%] w-[95%]">
          <div className="w-full px-4">
            <div className="text-center mx-auto max-w-[510px]">
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
                Get started with a free quote now. Our student-friendly exam
                assistance services begin at the most accessible prices designed
                to help you master your exams with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:w-[80%] w-[95%]">
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
                Custom Quote & Discussion
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">$0</h2>
              <p
                className="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
              >
                Submit and let us know your requirements now to get a free
                quote.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Quick Reply
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free Discussion
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Genuine Quote
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  No SignUp Or Account Needed
                </p>
              </div>
              <Link href="/submit-work">
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
              </Link>
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
                Programming Homework Help
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $39
                <span className="text-base text-body-color font-medium">
                  Starting Price
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
                Basic Assignments or Projects in any Programming language or
                STEM
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Plagiarism Free
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Expert Programmers
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  On Time Delivery
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Project Manager
                </p>
              </div>
              <Link href="/submit-work">
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
              </Link>
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
                Capstone Project / Major Assignment
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $290
                <span className="text-base text-body-color font-medium">
                  Starting Price
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
                Bigger Assignments with Advance & Complex requirements
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Academic Integrity
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free Revisions
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Personalised Support
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24x7 Email & Chat
                </p>
              </div>
              <Link href="/submit-work">
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
              </Link>
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
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-wrap justify-center lg:w-[80%] w-[95%]">
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
                Exam Help & Prepration
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $59
                <span className="text-base text-body-color font-medium">
                  Per Hour
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
                Online Test and Quizzes from Qualified Experts
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  1:1 Live Sessions
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Expert Tutors
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Take My Exam For Me
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Confidentiality Guaranteed
                </p>
              </div>
              <Link href="/submit-work">
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
              </Link>
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
                Online 1:1 Tutoring
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $49
                <span className="text-base text-body-color font-medium">
                  Per Hour
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
                For all Programming and STEM Courses
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Live Sessions
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Expert Programmers
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Flexible Time Slots
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24x7 Chat Support
                </p>
              </div>
              <Link href="/submit-work">
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
              </Link>
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
                Full Courses / Internship Program
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $990
                <span className="text-base text-body-color font-medium">
                  Complete Course
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
                Become an Expert Programmer
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Full Semester Support
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Personalized 1:1 Sessions
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Hand Picked Tutors
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Certificate From US Inc.
                </p>
              </div>
              <Link href="/submit-work">
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
              </Link>
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

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-`white">
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
        <ExpertCarousel />
      </div>

      <div className="gap-16 items-center pb-3 px-4 mx-auto max-w-screen-xl  lg:px-6">
        <section className=" container">
          {/* <h1 className="text-4xl font-bold">
          An intriguing title for an interesting article
        </h1>
        <div className="mt-1">
          <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div> */}

          <h2 className="text-4xl pb-2">
            <b>Mechanical Engineering Exam Help</b>
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mb-5 mt-3 text-slate-900">
            <p className="pb-2">
              A mechanical engineering exam tests your knowledge of critical
              concepts like thermodynamics, mechanics, fluids, materials, and
              design. It is an assessment that seeks to evaluate your
              understanding of these concepts theoretically and how well you can
              apply them to complex real-world problems.
            </p>

            <p className="pb-2">
              Don't worry; our experts are who understand what you need. We know
              these exams are tough, requiring complex math and mastery of
              challenging concepts. That is why we have tutors who have high
              experience in this field.
            </p>

            <p className="pb-2">
              Our professionals know their work very well. They are fantastic
              problem solvers who explain every subject of mechanical
              engineering in terms that will assist you in scoring well.{" "}
            </p>

            <p className="pb-2">
              We also have the best prices for various plans that fit your
              needs. Why be stressed by exams when we have the best mechanical
              engineering exam help online? Get our{" "}
              <Link href="/" className="text-blue-600">
                Exam Help Online
              </Link>{" "}
              services now!
            </p>
          </div>

          <h2 className="text-4xl pb-2">
            <b>List Of Mechanical Engineering Exam Help Topics For Your Exam</b>
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mb-5 mt-3 text-slate-900">
            <p className="pb-2">
              As we all know, becoming an expert in mechanical engineering
              requires a deep understanding of various subjects. Our exam helps
              cover the most crucial topics in detail. Here's what we offer:{" "}
            </p>

            <ul className="list-decimal">
              <li className="pb-2 font-bold">Thermodynamics </li>

              <p className="pb-2">
                This is about studying heat, effort, and hotness/coldness and
                how they relate to energy moving and changing. We will assist
                you in learning laws related to these cycles and their uses.
              </p>

              <li className="pb-2 font-bold">Statics</li>

              <p className="pb-2">
                This involves analyzing pushes, pulls, and turns on rigid,
                unmoving objects. We will guide you through conditions of
                balance, structures, frames, machines, and rubbing force
                problems.
              </p>

              <li className="pb-2 font-bold">Dynamics</li>

              <p className="pb-2">
                This covers the motion of things and the forces causing that
                motion. You will learn about movement study, force study,
                energy, momentum methods, and vibrations.
              </p>

              <li className="pb-2 font-bold">Mechanics of Materials</li>

              <p className="pb-2">
                This focuses on learning how solid objects act under different
                types of loads. We will cover stretching, squashing, twisting,
                bending, and failure theories.
              </p>

              <li className="pb-2 font-bold">Fluid Mechanics</li>

              <p className="pb-2">
                This involves the study of fluids, both liquids and gases, at
                rest and in motion. Topics include fluid statics, dynamics,
                dimensional analysis, and flow measurements.
              </p>
            </ul>

            <p className="pb-2">
              Our tutors explain challenging ideas in simple lessons. We also
              offer practice problems and real-world examples to improve
              learning. So, get ready to become a pro in your mechanical
              engineering exams.
            </p>
          </div>
          <h2 className="text-4xl pb-2">
            <b>
              Pass Your Mechanical Engineering Exam with Our Foolproof Services!
            </b>
          </h2>
          <div className="mt-1 pb-2">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="pb-4">
            Do you have difficulties passing your mechanical engineering exams?
            As experts, we know many students have faced similar challenges, and
            now is the perfect moment for you to discover the key to our
            collective success.
          </p>
          <li className="pb-2">
            Our team has people who have worked in mechanical engineering for
            many years. They know all the stuff that will assist you in the
            exam.
          </li>

          <li className="pb-2">
            We simplify and make things that seem difficult so that you can
            learn everything properly.
          </li>
          <li className="pb-2">
            We give you lots of materials to study, questions to practice, and
            mock exams to get you fully prepared.
          </li>

          <li className="pb-2">
            Our friendly experts are always there to answer any doubts you have
            and guide you personally.
          </li>

          <p className="pb-4">
            Don't miss this chance! Join us now and see how good you can be.
            Trust us, and our{" "}
            <Link href="/engineering-exam-help" className="text-blue-600">
              Engineering Exam Helpers
            </Link>{" "}
            will be with you every step of the way to help you become a star in
            mechanical engineering.
          </p>

          <h2 className="text-4xl pb-2">
            <b>Why Should You Get Mechanical Engineering Exam Help?</b>
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="pb-4 mt-3">
            Getting help for your mechanical engineering exams is a good idea.
            It lets you understand concepts better and obtain high scores. With
            an expert's guidance, challenging topics become easy to learn.
          </p>
          <ul className="list-decimal">
            <li className="pb-2 font-bold">Simple Explanations </li>

            <p className="pb-2">
              Experts explain complex ideas using simple words and real-life
              examples. By getting all your questions answered quickly, you save
              time and avoid stress. Their clear explanations make learning
              easy.
            </p>

            <li className="pb-2 font-bold">One-on-One Attention</li>

            <p className="pb-2">
              With personalized one-on-one attention, no concept is left behind.
              Your unique learning requirements are taken care of, ensuring you
              master every topic.
            </p>

            <li className="pb-2 font-bold">Time-Saving Help</li>

            <p className="pb-2">
              By getting professional help, you save precious time that would
              otherwise be spent struggling with complicated ideas alone. Their
              expertise allows for faster problem-solving.
            </p>

            <li className="pb-2 font-bold">Boost Confidence</li>

            <p className="pb-2">
              With a strong understanding of concepts and proven exam
              strategies, you gain the confidence to face any mechanical
              engineering exam without fear.
            </p>
          </ul>
          <p className="pb-2">
            Don't miss out on the opportunity to get expert help and improve
            your grades in mechanical engineering exams!
          </p>

          <br />

          <h2 className="text-4xl pb-2">
            <b>Improve Your Score with Our Mechanical Engineering Exam help</b>
          </h2>
          <div className="mt-1 pb-2">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="pb-4">
            We all know you will be stressed about mechanical engineering exams.
            You are not alone. It is simple to get completely lost when there is
            so much complex stuff to learn and remember. That’s where our exam
            help comes in.
          </p>

          <p className="pb-2">
            Our team of friendly advisors really knows their mechanical
            engineering topics inside out. They’ll explain those complex
            concepts to you in simple words.{" "}
          </p>

          <p className="pb-2">
            Trying to battle through your coursework alone only leads to low
            grades and frustration. But, our expertise assists you in your exam
            and provides all the resources that you need to pass it.{" "}
          </p>

          <p className="pb-2">
            Therefore, do not struggle with it alone, but let us take care of
            your mechanical engineering examination problems for you. We shall
            be there on every step guiding you patiently by answers and offering
            assistance with handy study materials.
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
      <div className="py-10">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQs</h2>
          <p className="text-neutral-500 text-xl mt-3">
            Frequenty Asked Questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
          <div
            className="py-5 w-full"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span> When can I get mechanical engineering exam help?</span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                You can get mechanical engineering exam help whenever you need
                it - nights, weekends, anytime! Our experts are available 24/7,
                so you never have to wait when you're feeling stuck or confused.
              </p>
            </details>
          </div>
          <div
            className="py-5"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span> Will it really help my grades?</span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                With personalized guidance and support from a tutor, you'll
                solidify your understanding of critical principles. This mastery
                helps boost confidence and exam performance.
              </p>
            </details>
          </div>
          <div
            className="py-5"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span>
                  {" "}
                  How do I get started for mechanical engineering exam help?
                </span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Please tell us when and what you need help with. We'll quickly
                set you up with an expert mechanical engineering tutor ready to
                support your success!
              </p>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
