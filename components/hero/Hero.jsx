"use client";
import React from "react";
import Form from "../form/Form";
import { useState } from "react";
import { IconArrowRight, IconChecks, IconSend2 } from "@tabler/icons-react";
import Loader from "../loader/Loader";
const Hero = () => {
  const [showLoader, setShowLoader] = useState(false);
  const toggleLoader = (show) => {
    setShowLoader(show);
  };

  return (
    <section
      className={`bg-slate-200 dark:bg-gray-900  w-full flex justify-center image-full ${"hero1"}`}
    >
      {showLoader && <Loader />}
      <div className="grid w-[75%] py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-5  ">
        <div className="mr-auto place-self-center  order-last lg:order-1 lg:col-span-3 z-10">
          <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none  text-white">
            Affordable And Prompt{" "}
            <span className="text-orange-400">Exam Help Online</span> That Helps
            You to Score High (24/7)
          </h1>
          <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-300">
            Now, getting stressed due to exams is a matter of the past. Make the
            right decision like thousands of students worldwide by choosing our
            online exam help, and score high grades with the assistance of our
            highly experienced experts.
          </p>
          <ul className="list-none mb-4 font-light text-gray-300 md:text-lg lg:text-xl">
            <li className="flex mb-1">
              <IconChecks className="me-2" />
              24 Hours Help Support
            </li>
            <li className="flex mb-1">
              <IconChecks className="me-2" /> Highly Experienced Experts
            </li>
            <li className="flex mb-1">
              <IconChecks className="me-2" /> 15000+ Happy Student Clients
            </li>
            <li className="flex mb-1">
              <IconChecks className="me-2" /> On-Time Delivery
            </li>
            <li className="flex mb-1">
              <IconChecks className="me-2" /> Affordable Online Exams Help
              Service
            </li>
          </ul>
          <div className="flex gap-3 sm:flex-row flex-col">
            <a
              href="/#pricing_section"
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
          <Form toggleLoader={toggleLoader} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
