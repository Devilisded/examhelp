import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceHero from "@/components/serviceHero/ServiceHero";
import ExpertCarousel from "@/components/expertCarousel/ExpertCarousel";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
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

import { IconSchool } from "@tabler/icons-react";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const page = () => {
  return (
    <div>
      <Navbar />

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

      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <section className=" container mb-32">
          <h1 className="text-4xl font-bold">
            An intriguing title for an interesting article
          </h1>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="mb-5 mt-3 text-slate-700">
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

          <h1 className="text-4xl font-bold ">
            An intriguing title for an interesting article
          </h1>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="mb-5 mt-3 text-slate-700">
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

          <h1 className="text-4xl font-bold ">
            An intriguing title for an interesting article
          </h1>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="mb-5 mt-3 text-slate-700">
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

          <h1 className="text-4xl font-bold ">
            An intriguing title for an interesting article
          </h1>
          <div className="mt-1">
            <span className="inline-block w-96 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="mb-5 mt-3 text-slate-700">
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

      <div className="items-center grid grid-cols-2 gap-4 pl-10 pr-10">
        <div className=" bg-white p-4">
          <h2 className=" text-black text-3xl mb-2 ">Overview</h2>
          <div className="mt-1">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="text-slate-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            harum tempore cupiditate asperiores provident, itaque, quo ex iusto
            rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
            sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
            soluta labore! Expedita quas, nesciunt similique autem, sunt,
            doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
            Dolores ex provident ipsa impedit, omnis magni earum. .{" "}
          </p>

          <ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0 mb-5">
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">
                Access to premium content and exclusive articles
              </p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">
                Access to premium content and exclusive articles
              </p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">
                Access to premium content and exclusive articles
              </p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">
                Access to premium content and exclusive articles
              </p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">
                Access to premium content and exclusive articles
              </p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">
                Free Shipping on select products
              </p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">
                Early access to upcoming events and promotions
              </p>
            </li>
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left">
                Dedicated customer support
              </p>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="bg-white p-4">
            <h2 className="text-black text-3xl mb-2">Background</h2>
            <div className="mt-1">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
            <p className="text-slate-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              ipsum vel nunc commodo hendrerit sit amet vel nisi. Donec sodales
              maximus justo, nec dictum lectus malesuada non. Sed auctor
              ultrices tellus non varius. Sed eu enim malesuada, fermentum mi
              eu, finibus velit. Nam quis blandit velit, vel vehicula neque.
              Etiam eu lorem suscipit, sollicitudin ante at, pharetra quam.
            </p>
          </div>
          <div className="bg-white p-4">
            <h2 className="text-black text-3xl mb-2">Challenge</h2>
            <div className="mt-1">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
            <p className="text-slate-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              ipsum vel nunc commodo hendrerit sit amet vel nisi. Donec sodales
              maximus justo, nec dictum lectus malesuada non. Sed auctor
              ultrices tellus non varius. Sed eu enim malesuada, fermentum mi
              eu, finibus velit. Nam quis blandit velit, vel vehicula neque.
              Etiam eu lorem suscipit, sollicitudin ante at, pharetra quam.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <table class="md:w-[80%]">
          <tbody className="border">
            <tr class="bg-white border transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr><td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td></tr>
            <tr class="bg-white border transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Whitney
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Austin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Ted
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Obama
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
          </tbody>
        </table>
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
    </div>
  );
};

export default page;
