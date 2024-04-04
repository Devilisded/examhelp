"use client";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Loader from "@/components/loader/Loader";
import { useState } from "react";

const Page = () => {
  const [showLoader, setShowLoader] = useState(false);
  const toggleLoader = (show) => {
    setShowLoader(show);
  };
  return (
    <div>
      {showLoader && <Loader />}

      <Navbar />
      <div className="flex justify-center pt-10">
        <div className="lg:w-[85%] grid lg:grid-cols-8 lg:gap-10">
          <div className="lg:col-span-2 order-last lg:order-1 px-6 lg:px-0 w-full">
            <Form toggleLoader={toggleLoader} />
          </div>
          <div className="p-5 lg:col-span-6 lg:order-last">
            <div className="md:flex md:-mx-2 ">
              <div className="w-full md:w-3/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-blue-500">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/94.jpg"
                      className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    />
                  </div>
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    Jane Doe
                  </h1>
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                          Active
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      <span>Member since</span>
                      <span className="ml-auto">Nov 07, 2016</span>
                    </li>
                  </ul>
                </div>
                <div className="my-4"></div>
              </div>
              <div className="w-full md:w-9/12 mx-2">
                <div className="bg-white shadow-sm rounded-sm">
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                          <h2 className="text-xl font-bold mb-4">About Me</h2>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed finibus est vitae tortor ullamcorper, ut
                            vestibulum velit convallis. Aenean posuere risus non
                            velit egestas suscipit. Nunc finibus vel ante id
                            euismod. Vestibulum ante ipsum primis in faucibus
                            orci luctus et ultrices posuere cubilia Curae;
                            Aliquam erat volutpat. Nulla vulputate pharetra
                            tellus, in luctus risus rhoncus id.
                          </p>

                          <h2 className="text-xl font-bold mt-6 mb-4">
                            Experience
                          </h2>
                          <div className="mb-6">
                            <div className="flex justify-between flex-wrap gap-2 w-full">
                              <span className="text-gray-700 font-bold">
                                Web Developer
                              </span>
                            </div>
                            <p className="mt-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed finibus est vitae tortor ullamcorper, ut
                              vestibulum velit convallis. Aenean posuere risus
                              non velit egestas suscipit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4 hidden md:block">
              <div className="bg-white pb-3 mb-32 hover:shadow">
                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                  <span>Similar Profiles</span>
                </div>
                <div className="flex flex-wrap gap-5">
                  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                      src="https://randomuser.me/api/portraits/men/94.jpg"
                      alt="Woman's Face"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                          Product Engineer
                        </p>
                      </div>
                      <button className="px-4 py-1 text-sm text-blue-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Hire Expert
                      </button>
                    </div>
                  </div>
                  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                      src="https://randomuser.me/api/portraits/men/94.jpg"
                      alt="Woman's Face"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                          Product Engineer
                        </p>
                      </div>
                      <button className="px-4 py-1 text-sm text-blue-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Hire Expert
                      </button>
                    </div>
                  </div>
                  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                      src="https://randomuser.me/api/portraits/men/94.jpg"
                      alt="Woman's Face"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                          Product Engineer
                        </p>
                      </div>
                      <button className="px-4 py-1 text-sm text-blue-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Hire Expert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
