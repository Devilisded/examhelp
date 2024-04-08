import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Navbar";
import axios from "axios";
import React from "react";
import pool from "../libs/mysql";
import Link from "next/link";
import Expagination from "./Expagination";

const getData = async (currentPage) => {
  try {
    const db = await pool;
    const query =
      "SELECT * from experts LEFT JOIN expert_subjects ON experts.SubjectID = expert_subjects.sid WHERE experts.id > ? limit 12";
    const q = "SELECT COUNT(*) as total from experts";

    const [rows] = await db.query(query, (currentPage - 1) * 12);
    const [total] = await db.query(q);
    return { data: rows, total: total };
  } catch (error) {
    return error;
  }
};

const Page = async ({ searchParams }) => {
  const currentPage = searchParams["page"] || 1;
  const res = await getData(currentPage);
  // console.log(res);
  const recordsPerPage = 12;
  const nPages = Math.ceil(res.total[0].total / recordsPerPage);

  return (
    <div>
      <Header />
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] pb-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Hire Our
              <span className="bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500 text-transparent">
                &nbsp;Experts
              </span>
            </h1>
          </div>

          <div></div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              This is the expert section of examhelp , if you want any help do
              contact us here and hire any freelance experts available widely.
            </p>
          </div>
        </div>
      </div>
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
        <div className="text-center pb-12">
          <h2 className="text-xl font-bold text-indigo-500">
            Having Highest Rating
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 ">
            Check our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
          {/* <Card /> */}
          {res.data.map((item, index) => (
            <div class="max-w-3xl w-full mx-auto z-10" key={index}>
              <div class="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
                <div class="flex-none sm:flex gap-3">
                  <div class=" relative h-32 w-32   sm:mb-0 mb-3">
                    <img
                      src={`/experts/${item.id}.jpg`}
                      alt="aji"
                      class=" w-32 h-32 object-cover rounded-2xl"
                    />
                  </div>
                  <div class="flex flex-col">
                    <div class="flex items-center justify-between sm:mt-2">
                      <div class="flex items-center">
                        <div class="flex flex-col">
                          <div class="w-full flex-none text-lg text-gray-800 font-bold leading-none">
                            {item.Name}
                          </div>
                          <div class="flex-auto text-gray-500 my-1">
                            <span class="mr-3 capitalize">{item.Title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row items-center">
                      <div class="flex">
                        {Array.from(Array(5).keys()).map((item, index) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5 text-yellow-400"
                            key={index}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div class="flex pt-2  text-sm text-gray-500">
                      <Link
                        href={`/experts/${
                          item.Name.toLowerCase().replaceAll(" ", "-") +
                          "-" +
                          item.id
                        }`}
                        className="shadow shadow-blue-600 text-blue-600 py-1 px-2 rounded hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
                      >
                        Hire Expert
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
        className="flex justify-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center
                     text-gray-900 uppercase align-middle transition-all rounded-full select-none
                      disabled:pointer-events-none 
                      disabled:opacity-50 disabled:shadow-none"
      >
        <Expagination Pages={nPages} currentPage={currentPage} />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
