"use client";
import { IconArrowRight, IconChecks, IconSend2 } from "@tabler/icons-react";
import "./style.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [hero, setHero] = useState(false);
  const checkWidth = () => {
    if (window.innerWidth >= 960) {
      setHero(true);
    }
  };
  useEffect(() => {
    checkWidth();
  }, []);
  return (
    <section
      className={`bg-slate-200 dark:bg-gray-900 mt-[60px] w-full flex justify-center image-full ${
        hero ? "hero1" : "hero2"
      }`}
    >
      <div className="grid w-[75%] py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-5  ">
        <div className="mr-auto place-self-center  order-last lg:order-1 lg:col-span-3 z-10">
          <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl text-white">
            Don't let exams get you down, sit back and take the
            <span className="text-orange-500"> Exam online!</span>
          </h1>
          <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-300">
            You've come to the correct site if you're looking for online exam
            assistance. We offer top-notch services to guarantee you receive the
            grade you want. Our professionals are highly skilled in providing
            the greatest services. Hiring a professional to take your exam here
            ensures that it will be finished on time, that the solutions will be
            of the highest caliber, and that the cost will not break the bank.
            Please contact us at any time since we are available day and night.
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
              <IconChecks className="me-2" /> Exam Completed Within The Deadline
            </li>
          </ul>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <IconArrowRight className="w-5 h-5 ml-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            View Services
          </a>
        </div>
        <div className="lg:order-last order-1 justify-self-end  flex justify-center lg:justify-end w-full lg:col-span-2 z-10">
          <form
            className="space-y-6 shadow-xl p-8 border border-slate-300 rounded-lg  bg-white"
            action="#"
          >
            <h5 className="text-xl font-bold text-gray-900 dark:text-white">
              Get the Best Online Exam Help
            </h5>

            <div>
              <input
                type="text"
                name="uname"
                id="uname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter full name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phonenumber"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your Number"
                required
              />
            </div>

            <div>
              <input
                type="datetime-local"
                name="date-time"
                id="datetime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="When you need it Choose date and time "
                required
              />
            </div>

            <div>
              <select
                name="user_subject"
                id="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
                required=""
              >
                <option value="" disabled="">
                  Choose your subject
                </option>
                <option value="C Programming">C Programming</option>
                <option value="C++ Programming">C++ Programming</option>
                <option value="Java Programming">Java Programming</option>
                <option value="Python Programming">Python Programming</option>
                <option value="Raptor Programming">Raptor Programming</option>
                <option value="Assembly Programming">
                  Assembly Programming
                </option>
                <option value="Visual Studio Programming">
                  Visual Studio Programming
                </option>
                <option value="C Sharp Programming">C Sharp Programming</option>
                <option value="Android Programming">Android Programming</option>
                <option value="Data structures &amp; Algorithms">
                  Data structures &amp; Algorithms
                </option>
                <option value="Database">Database</option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Operating System">Operating System</option>
                <option value="Computer Network">Computer Network</option>
                <option value="UML Diagrams">UML Diagrams</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics &amp; Discrete">
                  Mathematics &amp; Discrete
                </option>
                <option value="Electronics &amp; Electrical Help">
                  Electronics &amp; Electrical Help
                </option>
                <option value="Matlab &amp; Mathematica">
                  Matlab &amp; Mathematica
                </option>
                <option value="Statistics &amp; Analysis">
                  Statistics &amp; Analysis
                </option>
                <option value="Data Mining">Data Mining</option>
                <option value="Project Management">Project Management</option>
                <option value="MS Office">MS Office</option>
                <option value="R Programming">R Programming</option>
                <option value="Weka, Rapid Miner &amp; XLMiner">
                  Weka, Rapid Miner &amp; XLMiner
                </option>
                <option value="Technical Paper Writing">
                  Technical Paper Writing
                </option>
                <option value="IT Write Up Assignments">
                  IT Write Up Assignments
                </option>
                <option value="Assignment Writing">Assignment Writing</option>
                <option value="Online Quiz">Online Quiz</option>
                <option value="Online Quiz">HTML CSS and bootstrap </option>
                <option value="Research Paper Writing">
                  Research Paper Writing
                </option>
                <option value="Statistics"> Statistics</option>
                <option value="History"> History</option>
                <option value="Management"> Management</option>
                <option value="Economics"> Economics</option>
                <option value="Marketing"> Marketing</option>
                <option value="Math"> Math</option>
                <option value="Political Science"> Political Science</option>
                <option value="Java"> Java</option>
                <option value="Other"> Other</option>
              </select>
            </div>
            <div>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center  justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold align-middle rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit <IconSend2 className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
