import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceHero from "@/components/serviceHero/ServiceHero";
import ExpertCarousel from "@/components/expertCarousel/ExpertCarousel";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import {
  IconClock2,
  IconGraph,
  IconWorld,
  IconReportAnalytics,
  IconPigMoney,
} from "@tabler/icons-react";

import { IconSchool } from "@tabler/icons-react";
export const metadata = {
  title: "Best Accounting Exam Help (Expert Assistance for Your Accounting Exams!)",
  description:
    "Our team of experienced accounting professionals provides comprehensive exam help. Get personalized guidance, practice questions, and proven strategies to boost your confidence and achieve success.",
  openGraph: {
    title:
      " Best Accounting Exam Help (Expert Assistance for Your Accounting Exams!)",
  },
};

const Page = () => {
  return (
    <>
      <link
        rel="canonical"
        href="https://examhelp.online/accounting-exam-help"
      />
      <Navbar />

      <ServiceHero
        title="Best Accounting Exam Help | Expert Assistance for Your Accounting Exams!"
        desc="Our team of experienced accounting professionals provides comprehensive exam help. Get personalized guidance, practice questions, and proven strategies to boost your confidence and achieve success."
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
              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Save Time
              </h2>
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

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Domain Expertise
              </h2>

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

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Customized Assistance
              </h2>

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

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Worldwide Access
              </h2>

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

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Secure Service
              </h2>

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

              <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Affordable Pricing
              </h2>

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
        <h2 className="text-4xl text-center font-semibold mb-10">
          Our Experts
        </h2>
        <ExpertCarousel />
      </div>

      <div className="px-4 mx-auto pb-12 max-w-screen-xl  lg:px-6">
        <section className="container">
          {/* <h2 className="text-4xl font-bold">
            An intriguing title for an interesting article
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div> */}

          <h2 className="text-4xl font-bold mt-5">Accounting Exam Help</h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mb-5 mt-3 text-slate-700">
            <p className="pb-2">
              {" "}
              Scoring well on your accounting exams is important for your
              academic and professional journey. Whether you're a college-goer
              or a working professional aiming for certification, grasping
              complex accounting concepts and exam techniques can seem like an
              uphill task.
            </p>
            <p className="pb-2">
              {" "}
              That's where our expert accounting exam assistance comes in. We
              fully comprehend the hurdles you might face and have assembled a
              squad of highly skilled accounting pros dedicated to helping you
              accomplish your goals.{" "}
            </p>

            <p className="pb-2">
              {" "}
              We believe every student should have an equal chance of
              succeeding, and we are all about getting you ready for accounting
              exams with everything you need to succeed.{" "}
            </p>
            <p className="pb-2">
              {" "}
              Our exam support services are broad-based and responsive to your
              needs only; therefore, we give you precise guidance, which creates
              a learning experience that fits well with your strengths and areas
              of weakness.{" "}
            </p>
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Qualities of Our Accounting Exam Help Services
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="pb-2">
            Doing well in your accounting exams can feel like a real struggle,
            but you don't have to take it on all alone. Our accounting exam help
            services are made to give you the support and guidance needed to
            take your exams with full confidence.
          </p>
          <p className="pb-2">
            Whether you're a college student finding the concepts super tough or
            a working person trying to get certified, our team of
            super-experienced accounting experts is here to help you every
            single step of the way.
          </p>
          <p className="pb-2">
            We understand that each person learns in their way and has their own
            goals, which is why our approach is specially made just for you.
            From study plans and practice materials designed exactly for your
            needs to customized exam strategies, we ensure you get the most
            helpful and effective assistance possible.
          </p>

          <p className="pb-2">
            Whether clarifying ideas that confuse you, walking through
            real-world examples, or practicing problem-solving, our approach
            ensures you truly grasp the material.
          </p>
          <p className="pb-2">
            Our services are built on being professional, knowledgeable,
            available for you, and giving you unwavering support, providing you
            with the tools and resources needed to do well academically and
            professionally in accounting.
          </p>

          <h2 className="text-4xl font-bold mt-5">
            Common Challenges Faced in Accounting Exams
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mb-5 mt-3 text-slate-700">
            <p className="pb-2">
              Getting ready for and taking accounting exams presents several key
              difficulties that students must learn to overcome. While tough,
              recognizing and dealing with these hurdles is essential for
              achieving success.
            </p>

            <ul className="list-decimal ml-7">
              <li className="font-bold pb-2">Complicated Ideas</li>
              <p className="pb-2">
                Accounting involves understanding and applying many connected
                rules, principles, and processes. From debit/credit rules to
                adjusting entries to financial ratios, many complex ideas can
                feel overwhelming for students.
              </p>

              <li className="font-bold pb-2">Limited-time </li>
              <p className="pb-2">
                Accounting exams typically involve a large amount of material to
                cover in a short time frame. This puts pressure on students to
                work accurately and quickly, leaving little room for getting
                stuck or making careless mistakes.
              </p>

              <li className="font-bold pb-2">Exam Nerves </li>
              <p className="pb-2">
                The high-importance nature of accounting exams, combined with
                the complexity of the material, can cause significant test
                anxiety for many students. Anxiety can negatively impact focus,
                memory recall, and problem-solving abilities.
              </p>
            </ul>

            <p>
              By being aware of complicated ideas, time limits, and anxiety
              management from the start, accounting students can develop
              strategies to master these common exam challenges. Facing them
              directly is the first step toward confident performance.
            </p>
          </div>

          <h2 className="text-4xl font-bold mt-5">
            Why Seeking Online Exam Help Is Good?
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="pb-2 mt-3">
            In today's busy academic world, seeking online exam help can be a
            smart choice for students looking to succeed in accounting exams.
            Online resources offer numerous benefits that can give you an edge.
          </p>
          <ul className="list-decimal ml-7">
            <li className="font-bold pb-2">Easy Access and Flexibility</li>
            <p className="pb-2">
              Online exam help are available all day from anywhere with an
              internet connection. You can access study materials, practice
              questions, and expert guidance whenever convenient without being
              limited by location or schedule.
            </p>

            <li className="font-bold pb-2">Access to Knowledge </li>
            <p className="pb-2">
              Many online platforms provide access to experienced accounting
              professionals and tutors who deeply understand exam concepts and
              strategies. Their insights can clarify complicated topics and
              highlight crucial exam preparation techniques.
            </p>

            <li className="font-bold pb-2">Tailored To Your Needs</li>
            <p className="pb-2">
              Online exam help can often be tailored to your specific needs.
              Whether you need help with certain accounting areas, exam formats,
              or additional practice, personalized resources boost your chances
              of success.
            </p>

            <li className="font-bold pb-2">Cost Savings</li>
            <p className="pb-2">
              Compared to in-person tutoring or prep courses, good quality
              online exam help is generally more affordable, allowing you to get
              the assistance you need without spending too much.
            </p>
          </ul>

          <p className="pb-2">
            In summary, using online exam help gives accounting students a
            powerful advantage through easy access, access to knowledge,
            customized learning, and cost savings. Don't hesitate to use these
            helpful digital resources during those crucial exams.
          </p>

          <h2 className="text-4xl font-bold mt-5">
            Important Accounting Topics On Which We Can Provide Expert
            Assistance!
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="pb-2 mt-3">
            At our online accounting exam help service, we understand the wide
            range of topics and ideas students must master. Our experienced
            tutors can provide expert guidance across all major accounting areas
            to ensure you feel fully prepared for exam day.
          </p>

          <ul className="list-disc ml-7">
            <p className="pb-2">
              {" "}
              <b>Financial Accounting</b>{" "}
            </p>

            <li>Accounting rules, standards, and practices</li>
            <li>Adjusting entries and closing processes</li>
            <li> Money owed to you and money you owe others</li>
            <li className="pb-2">
              Inventory valuation and cost flow assumptions
            </li>

            <p className="pb-2">
              {" "}
              <b> Cost & Management Accounting</b>{" "}
            </p>

            <li>Cost concepts, classification, and behavior</li>
            <li>Job costing and process costing methods</li>
            <li>Budgeting and standard costing techniques</li>
            <li>Cost-volume-profit analysis</li>
            <li className="pb-2">Relevant costing for decision-making</li>

            <p className="pb-2">
              {" "}
              <b>Taxation Accounting</b>{" "}
            </p>
            <li>Understanding tax laws and regulations</li>
            <li>Calculating taxable income for individuals and businesses</li>
            <li>Tax planning strategies</li>
            <li className="pb-2">
              Completing tax returns (personal, corporate, partnership)
            </li>

            <p className="pb-2">
              {" "}
              <b>Auditing</b>{" "}
            </p>
            <li> Auditing goals, principles, and procedures</li>
            <li> Internal controls and risk assessment</li>
            <li>Audit evidence, documentation, and reporting</li>
            <li className="pb-2">Professional ethics and legal liability</li>
          </ul>

          <p className="pb-2">
            No matter which accounting areas you need support with, our tutors
            have the deep subject-matter knowledge to break down complicated
            topics, reinforce key ideas through practice, and equip you with
            exam strategies for success. Get customized{" "}
            <Link href="/" className="text-blue-600">
              {" "}
              Exam Help Online
            </Link>{" "}
            services today from us.
          </p>

          <h2 className="text-4xl font-bold mt-5">
            Get Highly Affordable Online Accounting Exam Help Service
          </h2>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="pb-2 mt-3">
            Counting the cost of preparing for accounting exams can be tough on
            a student's budget. Many students struggle to meet these costs, so
            they find it hard to pay for expensive face-to-face tutoring or prep
            courses.
          </p>

          <p className="pb-2">
            Nevertheless, through our online platform, you can access a quality
            option that is also affordable. We understand that even students are
            financially constrained, so we have made our charges
            pocket-friendly. However, if you don’t want to spend too much money
            on this service, you should use our company because our prices are
            lower than those of our competitors.
          </p>
          <p className="pb-2">
            Thus, you will get timely and efficient assistance from skilled
            tutors who specialize in dealing with accounting study guides and
            multiple-choice questions while saving you time and money.
          </p>

          <p className="pb-2">
            Contrary to others who add up every single cost, we bill
            all-inclusively, and therefore, everything is clear right from the
            start with no hidden fees attached. You do not need to worry about
            how much it will cost –invest in it now!
          </p>
          <p className="pb-2">
            This will help you succeed academically at an affordable price; get
            our services today to improve your knowledge and performance during
            your Accounting exams.
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
      <Footer />
    </>
  );
};

export default Page;
