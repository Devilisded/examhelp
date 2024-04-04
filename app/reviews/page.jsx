"use client";
import React, { useEffect, useState } from 'react'
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import axios from "axios"   
import { Pagination } from '@mui/material';

const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    let firstIndex = lastIndex - recordsPerPage;
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(process.env.webURL + "/api/reviews").then((res) => {
            setData(res.data);
        })
    }, [])
    const records = data.slice(firstIndex, lastIndex);
    const nPages = Math.ceil(data.length / recordsPerPage);
    return (
        <div>
            <Navbar />
            <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                            Let's Build
                            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Together</span>
                        </h1>
                    </div>


                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600 dark:text-gray-400">Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.</p>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">

                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

                    <div className="mb-10 space-y-4 px-6 md:px-0">
                        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            See What our Client Think of us.
                        </h2>
                    </div>

                    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {records.map((item,index)=>(
                        <div
                        
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">{item.author_name}</h6>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">{item.review_title}</p>

                                    <div className="flex items-center mt-1">
                                        <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    </div>

                                </div>
                            </div>
                            <p className="mt-8">{item.review_description}
                            </p>
                        </div>
                    )
                    )}

                    </div>

                    <div className='flex justify-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center
                     text-gray-900 uppercase align-middle transition-all rounded-full select-none
                      disabled:pointer-events-none 
                      disabled:opacity-50 disabled:shadow-none'>

                                <Pagination count={nPages}   size="large"     
                        onChange={(e, value) => setCurrentPage(value)}/>
                        
               </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reviews