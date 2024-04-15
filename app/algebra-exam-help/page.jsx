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
    title: " Looking For The Best Algebra Exam Help?",
    description:
        "Are you dreading your Algebra Exam? Get Algebra Exam Help Online! Master equations, solve problems, and boost your confidence.",
    openGraph: {
        title: "Looking For The Best Algebra Exam Help?",
    },
};
const Page = () => {
    return (
        <>
            <link
                rel="canonical"
                href="https://examhelp.online/algebra-exam-help"
            />
            <Navbar />

            <ServiceHero
                title="Need An Expert To Offer You With The Best Algebra Exam Help?"
                desc="Are you dreading your Algebra Exam? Get Algebra Exam Help Online! Master equations, solve problems, and boost your confidence."
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
                        <b>Algebra Exam Help</b>
                    </h2>
                    <div className="mt-1">
                        <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <div className="mb-5 mt-3 text-slate-900">
                        <p className="pb-2">
                            Algebra is a branch of mathematics that deals with the study of operations and relations and the manipulation of mathematical symbols. It is the base of higher-level math and is extensively applied in different areas such as physics, engineering, and computer science, among others. Algebra examination help is vital for success in many educational and career endeavors.
                        </p>

                        <p className="pb-2">
                            Our team of experienced tutors and subject matter experts has gathered several resources to help you out with the exam.
                        </p>

                        <p className="pb-2">
                            Our assistance has an individualized approach to making sure you excel in your algebra tests. “Algebra Exam Help” therefore provides its clients with a user-friendly interface that aims at giving quality education, thus enabling them to succeed academically.
                            {" "}
                        </p>


                    </div>

                    <h2 className="text-4xl pb-2">
                        <b>Conquer Your Algebra Exam On These Topics (No More Nightmares Guaranteed)</b>
                    </h2>
                    <div className="mt-1">
                        <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <div className="mb-5 mt-3 text-slate-900">
                        <p className="pb-2">
                            We know that algebra can be a little bit tough, but don’t worry! We will help you with many different algebra topics for your examination. Here are some of the topics we cover under our <Link href="/" className="text-blue-600">
                                Exam Help Online  </Link> {" "}services:
                        </p>

                        <ul className="list-decimal">
                            <li className="pb-2 font-bold">Numbers and Expressions </li>

                            <p className="pb-2">
                                This includes understanding fundamental operations such as addition, subtraction, multiplication, and division. We will also guide you in working with literal numbers.
                            </p>

                            <li className="pb-2 font-bold">Equations and Inequalities</li>

                            <p className="pb-2">
                                An equation is a statement in math that uses an equal sign (=). We will assist you in nailing which number fits into the space to make the equation true. On another side of the coin, inequalities are just like equations except that they use signs such as greater than or less than .
                            </p>

                            <li className="pb-2 font-bold">Linear Equations</li>

                            <p className="pb-2">
                                These equations have a linear solution. Once more, we shall show how to calculate the unknown number and how to put it on a graph.
                            </p>

                            <li className="pb-2 font-bold">Polynomials</li>

                            <p className="pb-2">
                                These refer to expressions involving coefficients and variables like x^2 + 3x + 2. That means we should simplify them for you, split them into fragments, and use them in solving problems.

                            </p>

                        </ul>

                        <p className="pb-2">
                            We want you to feel confident and prepared for your algebra exam. So don't wait anymore to reach out to us. Our mathematics exam help experts make sure you get the best marks with our assistance.
                        </p>
                    </div>
                    <h2 className="text-4xl pb-2">
                        <b>
                            Why do Students look for Algebra Exam Helpers?
                        </b>
                    </h2>
                    <div className="mt-1 pb-2">
                        <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <p className="pb-4">
                        Struggling with complex algebra topics? Don't worry, you're not alone. Many students look for extra help to do well in their algebra exams.
                    </p>
                    <li className="pb-2 font-bold">Complex Concepts</li>
                    <p className="pb-2">Algebra has some tricky parts, with numbers and letters mixed. Some kids find it hard to understand ideas like equations and polynomials without a little extra support.</p>

                    <li className="pb-2 font-bold">Fear of Failure</li>
                    <p className="pb-2">Lots of students worry about failing their algebra exams. They get help so they can feel more confident and really know the material well.
                    </p>
                    <li className="pb-2 font-bold">Time Constraints</li>
                    <p className="pb-2">We know, studnets have school, activities, and they have to balance their own life to balance. Algebra helpers make sure they use their time well and can focus on learning.</p>

                    <li className="pb-2 font-bold">Individual Learning Pace</li>
                    <p className="pb-2">Every studnet learns at their speed. Our Helpers give each student special attention, matching how quickly or slowly they know best.</p>

                    <li className="pb-2 font-bold">Need for Clarification</li>
                    <p className="pb-2">Sometimes, just the teaching in class isn't enough to totally get algebra ideas. Students look for helpers to clear up any confusion and understand better.</p>

                    <li className="pb-2 font-bold">Desire for Better Grades</li>
                    <p className="pb-2">Good grades are crucial for doing well in school. Students find algebra helpers to improve their algebra grades and reach their goals.</p>

                    <li className="pb-2 font-bold">Future Options</li>
                    <p className="pb-2">There is no doubt being good at algebra is valuable even after school. Students know mastering algebra can open up different job paths, so they get help for a brighter future.</p>

                    <p className="pb-2">With the proper support, you can become an algebra champion and set yourself up for success. Reach out for help today and see how far you can go!</p>

                    <h2 className="text-4xl pb-2">
                        <b>Why Are Our Experts Best for Your Algebra Exam Help?</b>
                    </h2>
                    <div className="mt-1">
                        <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <p className="pb-4 mt-3">
                        Are you curious about why our professionals excel at teaching algebra principles? Let us find the reasons why we are best for you:
                    </p>
                    <ul className="list-decimal">
                        <li className="pb-2 font-bold">Expertise </li>

                        <p className="pb-2">
                            Our professionals boast extensive knowledge of algebra, coupled with years of teaching experience. They comprehend the core concepts and convey them with utmost clarity.
                        </p>

                        <li className="pb-2 font-bold">Lucid Communication</li>

                        <p className="pb-2">
                            Teaching algebra requires more than subject mastery - it entails articulating complex ideas in simple terms. Our professionals adeptly simplify intricate concepts for easy comprehension.
                        </p>

                        <li className="pb-2 font-bold">Tailored Approach</li>

                        <p className="pb-2">
                            Our professionals customize their teaching methods to suit your unique learning style. This personalized method ensures a practical understanding of algebra codes at your own pace.
                        </p>

                        <li className="pb-2 font-bold">Engaging Instruction</li>

                        <p className="pb-2">
                            Our professionals invest excitement into algebra learning by including real-world examples and interactive activities, enabling an enjoyable learning experience.
                        </p>
                        <li className="pb-2 font-bold">Proven Success</li>

                        <p className="pb-2">
                            Our experts have helped many students achieve algebra mastery by providing advice that builds confidence and empowers them to succeed academically.
                        </p>
                    </ul>
                    <p className="pb-2">
                        Are you eager to solve the mysteries of algebra? With our reputable experts as your guides, you'll conquer algebraic challenges effortlessly.
                    </p>

                    <br />

                    <h2 className="text-4xl pb-2">
                        <b>Can I Hire Someone to Do My Algebra Exam Help?
                        </b>
                    </h2>
                    <div className="mt-1 pb-2">
                        <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                    <p className="pb-4">
                        If you are stuck on a linear algebra exam, then we are your best bet. We have specialists who are well versed in different forms of algebra and will surely provide you with superior service for the Algebra exam. Solve these linear algebra equations through the following steps:
                    </p>

                    <li className="pb-2">Identify variables and constants.</li>
                    <li className="pb-2">Simplify both sides.</li>
                    <li className="pb-2">Isolate the variable.</li>
                    <li className="pb-2">Solve for the variable.</li>

                    <p className="pb-2">
                        We also know about regents exam help algebra books. Consequently, our Algebrar Exam help is complete as we help you understand Algebra too.
                    </p>
                    <h2 className="text-4xl pb-2">
                        <b>Tips to Remember Algebra Formulas
                        </b>
                    </h2>
                    <div className="mt-1 pb-2">
                        <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                    <p className="pb-2">It is challenging to remember algebraic formulas. However, there are easy ways to make them more accessible. The best thing is to understand the ways that suit your learning style best and practice a lot.</p>

                    <p className="pb-2">Tips for recalling algebra formulas:</p>

                    <li className="pb-2">Practice formulas repeatedly for better recall.</li>
                    <li className="pb-2">Create mnemonics, rhymes, or visuals as memory aids.</li>
                    <li className="pb-2">Understand formulas' logic for conceptual reinforcement.</li>
                    <li className="pb-2">Use flashcards with formulas on one side and meanings on the other.</li>
                    <li className="pb-2">Draw diagrams to visualize formula applications.</li>
                    <li className="pb-2">Relate formulas to real-life examples.</li>
                    <li className="pb-2">Break complex formulas into components for easier memorization.</li>
                    <li className="pb-2">Recite formulas aloud for auditory reinforcement.</li>
                    <li className="pb-2">Review formulas frequently to keep them fresh in memory.</li>

                    <p className="pb-2">Practicing such things may actually make algebraic expressions stick around inside you. Do not be bothered if they do not sink at first. Just continue rehearsing using different methods until everything starts making sense.</p>

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
            <div className="py-10" itemScope itemType="https://schema.org/FAQPage">
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
                                <span> What kind of Algebra exam assistance do you offer?</span>
                                <span className="transition group-open:rotate-180">
                                    <IconChevronDown />
                                </span>
                            </summary>
                            <div
                                className="py-5"
                                itemScope
                                itemProp="mainEntity"
                                itemType="https://schema.org/Question"
                            >  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Our expert tutors can assist with the following:</p>

                                <li>Understanding algebra concepts</li>
                                <li>Getting over challenging questions</li>
                                <li>Exam Preparation</li>
                                <li>Gaining confidence in algebra.</li></div>



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
                                <span> How can your tutors help me improve my Algebra skills?
                                </span>
                                <span className="transition group-open:rotate-180">
                                    <IconChevronDown />
                                </span>
                            </summary>
                            <div
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            ><p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Our tutors will take a personalized approach. They will help you identify weak areas and provide focused instructions. Moreover, they can teach you good study habits and give helpful test tips.
                                </p></div>

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
                                    What are the benefits of using your Algebra exam help service?
                                </span>
                                <span className="transition group-open:rotate-180">
                                    <IconChevronDown />
                                </span>
                            </summary>
                            <div
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"><p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    The advantages of using our Algebra exam help include: </p>

                                <li>A better understanding of concepts in Algebra</li>
                                <li>Increased ability to solve problems</li>
                                <li>More self-assured during exams</li>
                                <li>Improved grades in math.</li></div>



                        </details>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page;
