import Image from "next/image";
import Footer from "@/components/footer/Footer";
import { IconArrowRight, IconChecks, IconSend2 } from "@tabler/icons-react";
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
import Form from "@/components/form/Form";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section
        className={`bg-slate-200 dark:bg-gray-900 mt-[60px] w-full flex justify-center image-full ${"hero1"}`}
      >
        <div className="grid w-[75%] py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-5  ">
          <div className="mr-auto place-self-center  order-last lg:order-1 lg:col-span-3 z-10">
            <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl text-white">
              Don't let exams get you down, sit back and take the
              <span className="text-orange-500"> Exam online!</span>
            </h1>
            <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-300">
              You've come to the correct site if you're looking for online exam
              assistance. We offer top-notch services to guarantee you receive
              the grade you want. Our professionals are highly skilled in
              providing the greatest services. Hiring a professional to take
              your exam here ensures that it will be finished on time, that the
              solutions will be of the highest caliber, and that the cost will
              not break the bank. Please contact us at any time since we are
              available day and night.
            </p>
            <ul className="list-none mb-4 font-light text-gray-300 md:text-lg lg:text-xl">
              <li className="flex mb-1">
                <IconChecks className="me-2" /> Live Chat Support
              </li>
              <li className="flex mb-1">
                <IconChecks className="me-2" /> 24/7 Availability of Tutors
              </li>
              <li className="flex mb-1">
                <IconChecks className="me-2" /> Instant Assistance
              </li>
              <li className="flex mb-1">
                <IconChecks className="me-2" /> Over 5000 Professional &
                Experienced Exam Helpers
              </li>
              <li className="flex mb-1">
                <IconChecks className="me-2" /> Exam Completed Within The
                Deadline
              </li>
            </ul>
            <div className="flex gap-3 sm:flex-row flex-col">
              <a
                href="#"
                className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <IconArrowRight className="w-5 h-5 ml-1" />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                View Services
              </a>
            </div>
          </div>
          <div className="lg:order-last order-1 justify-self-end  flex justify-center lg:justify-end w-full lg:col-span-2 z-10">
            <Form />
          </div>
        </div>
      </section>
      <div className="py-16 bg-white pb-20 ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
          <h2 className="text-2xl text-black font-bold justify-center items-center flex md:text-4xl  pb-10">
            About Exam Help Online
          </h2>
          <div className="grid lg:grid-cols-10 gap-2">
            <div className=" lg:col-span-4">
              <Image
                src="/images/ab.webp"
                alt="img"
                width={700}
                height={500}
                className="rounded-full w-auto"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="mt-4 text-black text-lg pt-16 ">
                We have thousands of exams experts for more than 50 + different
                subjects. Our exam experts possess higher educational
                qualifications from top colleges and years of taking exams for
                students. We have been helping the students for the last seven
                years, and we have served more than 18,750+ students with our
                services.
              </p>
              <p className="mt-4 text-black text-lg ">
                Our experts are proficient in solving the exams for a wide range
                of important subjects such as statistics, accounting, medical,
                mathematics, finance, computer science, programming, management,
                nursing, history, chemistry, and many more subjects.
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
              Statistics is a branch of mathematics that deals with the
              collection, analysis, interpretation, and presentation of masses
              of numerical data. It's not easy to study statistics and become
              proficient in all statistics techniques and methods of analysis of
              large datasets. To be an expert in statistics, you must have good
              command in Mathematics, along with a basic knowledge of Economics.
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
              Medical students mostly need nursing exam help. Nursing is an
              occupation for health care. It focuses on the caring of persons,
              children, and societies; so that they can stay fit or improve
              their health. As a medical student, they are required to cover
              medical documents, healthcare-related subjects. Students face
              problems while they have an online nursing exam.
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
              The accounting process includes summarizing, analyzing, and
              reporting financial transactions to oversight agencies,
              regulators, and tax collection entities. The definition of
              accounting is the process of recording and managing financial
              accounts properly in a systematic way. Preparing a Profit and Loss
              Statement is an example of accounting.
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
              The process of getting help from over services is very simple, you
              need to let us know all the required details for your exam, and we
              will discuss it with our mathematics exams expert, then we will
              quote you our expected price based on the length of the paper and
              complexity of questions in the exam. Don't worry about the price;
              we have kept our costs very reasonable. After that, you can pay us
              for your exam by using safe payment methods, and we will schedule
              the best suitable mathematics expert who can take your exam on
              time and answer all the questions asked correctly to help you get
              the best grades.
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
              Computer science is the most demanding field in this era.
              Everything is changing to digitalization resulting in demand for
              the proper blend of software with technologies. Because of this,
              students prefer to pursue their degree in computer science and its
              sub-discipline field. For getting the degree, they have to clear
              the exams. So, there might be the possibility that they look for
              the best computer science exam help. The reason can be that
              students do not have enough knowledge of their core subjects, do
              not have enough time, and many more.
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
              Finance is a broad term that describes banking, leverage or debt,
              credit, capital markets, money, and investments. Finance
              represents money management and the process of acquiring needed
              funds—finance deals in Business funds, budgets, values, risks,
              investments, and strategies. The simplest definition of Finance is
              to provide money or credit for something. An example of Finance is
              the bank giving a loan to someone to purchase a house. The purpose
              of Finance is to help people save, manage, and raise money.
              Finance needs to have its purpose enunciated and accepted.
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
              Are you burdened to get the finest grades in your upcoming JAVA
              exam? It’s very challenging for students to deal with complicated
              JAVA programs. If a student wants to get high scores in his JAVA
              exam, he must have in-depth knowledge of JAVA's concepts,
              mathematical problems, code optimization, and regular expressions.
              So, if you are struggling with your JAVA skills and not prepared
              for your JAVA exam and you don’t know how to proceed further, in
              that case, you need to connect with our JAVA programming experts
              to get JAVA exam help, JAVA test help, or JAVA quiz help.
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
              Chemistry exam help is the service provided by us to help students
              in getting the finest and desired grades in their exams. Because
              of the easy availability of the fast internet and new advancements
              in technology, all universities and colleges are shifting towards
              online classes and online tests or quizzes to test student skills.
              It is difficult for students to learn and understand the concepts
              in online classes and then to appear in online exams because of
              new technology and interface. That is why we have started an
              online exam help for students to ace their exams. In this online
              help
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
              Geometry exam help is the service provided by us to help students
              in getting the most satisfactory grades in their exams. Because of
              the easy availability of the fast internet and new advancements in
              technology, all universities and colleges are shifting towards
              online classes and online tests or quizzes to test student skills.
              It is difficult for students to learn and understand the concepts
              in online classes and then to appear in online exams because of
              new technology and interface. That is why we have started an
              online exam help to help students ace their exams. In this online
              help,{" "}
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
                <span> What is a SAAS platform?</span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows
                users to access and use a variety of tools and functionality.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span> How does billing work?</span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offers a variety of billing options, including monthly and
                annual subscription plans, as well as pay-as-you-go pricing for
                certain services. Payment is typically made through a credit
                card or other secure online payment method.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span> Can i get full refund ?</span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                If you need help with the platform or have any other questions,
                you can contact the company's support team by submitting a
                support request through the website or by emailing
                support@We.com.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                <span> How do I contact support?</span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                If you need help with the platform or have any other questions,
                you can contact the company's support team by submitting a
                support request through the website or by emailing
                support@We.com.
              </p>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
