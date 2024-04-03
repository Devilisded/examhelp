import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Navbar";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] pb-20">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Hire Our
              <span class="bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500 text-transparent">
                &nbsp;Experts
              </span>
            </h1>
          </div>

          <div></div>

          <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-500 dark:text-gray-400">
              This is the expert section of examhelp , if you want any help do
              contact us here and hire any freelance experts available widely.
            </p>
          </div>
        </div>
      </div>
      <section class="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
        <div class="text-center pb-12">
          <h2 class="text-xl font-bold text-indigo-500">
            Having Highest Rating
          </h2>
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 ">
            Check our awesome team members
          </h1>
        </div>
        <div class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
          <Card />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
