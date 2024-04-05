"use client";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

const Reviews = async ({ searchParams }) => {
  const router = useRouter();
  const currentPage = searchParams["page"] || 1;
  const recordsPerPage = 21;
  const lastIndex = currentPage * recordsPerPage;
  let firstIndex = lastIndex - recordsPerPage;
  const res = await fetch(process.env.webURL + "/api/reviews");
  const data = await res.json();
  const records = data.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(data.length / recordsPerPage);
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Let's Build&nbsp;
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-orange-400 text-transparent">
                Together
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Glance at what the other students are saying about our services.
              If you have any queries regarding anything you can visit out
              Contact Us Page.
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900"
        id="reviews"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              See What our Client Think of us.
            </h2>
          </div>

          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {records.map((item, index) => (
              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
                key={index}
              >
                <div className="flex gap-4">
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                      {item.author_name}
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {item.review_title}
                    </p>

                    <div className="flex items-center mt-1">
                      {Array.from(Array(5).keys()).map((item) => (
                        <svg
                          className="w-4 h-4 fill-current text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          key={item}
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-8">{item.review_description}</p>
              </div>
            ))}
          </div>

          <div
            className="flex justify-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center
                     text-gray-900 uppercase align-middle transition-all rounded-full select-none
                      disabled:pointer-events-none 
                      disabled:opacity-50 disabled:shadow-none"
          >
            <Pagination
              count={nPages}
              size="large"
              page={parseInt(currentPage)}
              onChange={(e, value) => router.push(`/reviews?page=${value}`)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
