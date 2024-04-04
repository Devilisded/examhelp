import { getAllPosts } from "@/lib/api";
import React from "react";
import Link from "next/link";
import Header from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// const Page = () => {
//   const post = getAllPosts();
//   console.log(post);
//   const heroPost = post[0];
//   const morePost = post.slice(1);
//   return (
//     <div>
//       <Header />

//       {/* <div className="py-10 flex flex-col gap-10">
//         {post.map((item) => (
//           <div className="dark:bg-gray-100 dark:text-gray-900" key={item.slug}>
//             <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
//               <div
//                 className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4"
//                 style={{
//                   background: "url(https://source.unsplash.com/random/640x480)",
//                   backgroundPosition: "center center",
//                   backgroundBlendMode: "multiply",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//               <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
//                 <div className="flex justify-start">
//                   <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-600 dark:text-gray-50">
//                     Label
//                   </span>
//                 </div>
//                 <h1 className="text-3xl font-semibold">{item.title}</h1>
//                 <p className="flex-1 pt-2">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
//                   reprehenderit adipisci tempore voluptas laborum quod.
//                 </p>
//                 <Link
//                   className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600"
//                   href={`/blog/${item.slug}`}
//                 >
//                   <span>Read more</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     className="w-4 h-4"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                 </Link>
//                 <div className="flex items-center justify-between pt-2">
//                   <div className="flex space-x-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       className="w-5 h-5 dark:text-gray-600"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                     <span className="self-center text-sm">
//                       by Leroy Jenkins
//                     </span>
//                   </div>
//                   <span className="text-xs">3 min read</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}

//       <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-col gap-10">
//         <div class="lg:flex items-stretch md:mt-12 mt-8">
//           <div class="lg:w-1/2">
//             <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
//               <div class="sm:w-1/2 relative">
//                 <div>
//                   <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                     12 April 2021
//                   </p>
//                   <div class="absolute bottom-0 left-0 p-6">
//                     <h2 class="text-xl font-semibold 5 text-white">
//                       The Decorated Ways
//                     </h2>
//                     <p class="text-base leading-4 text-white mt-2">
//                       Dive into minimalism
//                     </p>
//                     <a
//                       href="javascript:void(0)"
//                       class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
//                     >
//                       <p class="pr-2 text-sm font-medium leading-none">
//                         Read More
//                       </p>
//                       <svg
//                         class="fill-stroke"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M5.75 12.5L10.25 8L5.75 3.5"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <img
//                   src="https://i.ibb.co/DYxtCJq/img-1.png"
//                   class="w-full"
//                   alt="chair"
//                 />
//               </div>
//               <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
//                 <div>
//                   <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                     12 April 2021
//                   </p>
//                   <div class="absolute bottom-0 left-0 p-6">
//                     <h2 class="text-xl font-semibold 5 text-white">
//                       The Decorated Ways
//                     </h2>
//                     <p class="text-base leading-4 text-white mt-2">
//                       Dive into minimalism
//                     </p>
//                     <a
//                       href="javascript:void(0)"
//                       class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
//                     >
//                       <p class="pr-2 text-sm font-medium leading-none">
//                         Read More
//                       </p>
//                       <svg
//                         class="fill-stroke"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M5.75 12.5L10.25 8L5.75 3.5"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <img
//                   src="https://i.ibb.co/3C5HvxC/img-2.png"
//                   class="w-full"
//                   alt="wall design"
//                 />
//               </div>
//             </div>
//             <div class="relative">
//               <div>
//                 <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                   12 April 2021
//                 </p>
//                 <div class="absolute bottom-0 left-0 md:p-10 p-6">
//                   <h2 class="text-xl font-semibold 5 text-white">
//                     The Decorated Ways
//                   </h2>
//                   <p class="text-base leading-4 text-white mt-2">
//                     Dive into minimalism
//                   </p>
//                   <a
//                     href="javascript:void(0)"
//                     class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
//                   >
//                     <p class="pr-2 text-sm font-medium leading-none">
//                       Read More
//                     </p>
//                     <svg
//                       class="fill-stroke"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M5.75 12.5L10.25 8L5.75 3.5"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <img
//                 src="https://i.ibb.co/Ms4qyXp/img-3.png"
//                 alt="sitting place"
//                 class="w-full mt-8 md:mt-6 hidden sm:block"
//               />
//               <img
//                 class="w-full mt-4 sm:hidden"
//                 src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
//                 alt="sitting place"
//               />
//             </div>
//           </div>
//           <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
//             <div class="relative">
//               <div>
//                 <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                   12 April 2021
//                 </p>
//                 <div class="absolute bottom-0 left-0 md:p-10 p-6">
//                   <h2 class="text-xl font-semibold 5 text-white">
//                     The Decorated Ways
//                   </h2>
//                   <p class="text-base leading-4 text-white mt-2">
//                     Dive into minimalism
//                   </p>
//                   <a
//                     href="javascript:void(0)"
//                     class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
//                   >
//                     <p class="pr-2 text-sm font-medium leading-none">
//                       Read More
//                     </p>
//                     <svg
//                       class="fill-stroke"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M5.75 12.5L10.25 8L5.75 3.5"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <img
//                 src="https://i.ibb.co/6Wfjf2w/img-4.png"
//                 alt="sitting place"
//                 class="w-full sm:block hidden"
//               />
//               <img
//                 class="w-full sm:hidden"
//                 src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
//                 alt="sitting place"
//               />
//             </div>
//             <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
//               <div class="relative w-full">
//                 <div>
//                   <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                     12 April 2021
//                   </p>
//                   <div class="absolute bottom-0 left-0 p-6">
//                     <h2 class="text-xl font-semibold 5 text-white">
//                       The Decorated Ways
//                     </h2>
//                     <p class="text-base leading-4 text-white mt-2">
//                       Dive into minimalism
//                     </p>
//                     <a
//                       href="javascript:void(0)"
//                       class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
//                     >
//                       <p class="pr-2 text-sm font-medium leading-none">
//                         Read More
//                       </p>
//                       <svg
//                         class="fill-stroke"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M5.75 12.5L10.25 8L5.75 3.5"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <img
//                   src="https://i.ibb.co/3yvZBpm/img-5.png"
//                   class="w-full"
//                   alt="chair"
//                 />
//               </div>
//               <div class="relative w-full sm:mt-0 mt-4">
//                 <div>
//                   <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                     12 April 2021
//                   </p>
//                   <div class="absolute bottom-0 left-0 p-6">
//                     <h2 class="text-xl font-semibold 5 text-white">
//                       The Decorated Ways
//                     </h2>
//                     <p class="text-base leading-4 text-white mt-2">
//                       Dive into minimalism
//                     </p>
//                     <a
//                       href="javascript:void(0)"
//                       class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
//                     >
//                       <p class="pr-2 text-sm font-medium leading-none">
//                         Read More
//                       </p>
//                       <svg
//                         class="fill-stroke"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M5.75 12.5L10.25 8L5.75 3.5"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <img
//                   src="https://i.ibb.co/gDdnJb5/img-6.png"
//                   class="w-full"
//                   alt="wall design"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//     {/* {post.map((post) => (
//         <Link href={`/blog/${post.slug}`} key={post.slug}>
//           <h1>{post.title}</h1>
//         </Link>
//       ))} */}
//       <Footer />
//     </div>
//   );
// };

// export default Page;

const Page = () => {
  const post = getAllPosts();
  const morePost = post.slice(2);
  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center">
        <div className="grid md:grid-cols-2 md:w-[70%] w-[90%]  gap-10 pt-10 py-5">
          <div class="relative max-h-[550px]">
            <div>
              <div className="bg-black/30 absolute top-0 right-0 w-full h-full"></div>
              <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                {Date(post[0].date).slice(4, 16)}
              </p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold 5 text-white">
                  {post[0].title}
                </h2>
                <p class="text-base leading-4 text-white mt-2">
                  {post[0].description}
                </p>
                <Link
                  href={`/blog/${post[0].slug}`}
                  class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg
                    class="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={post[0].coverImage}
              alt="sitting place"
              class="w-full object-cover h-full "
            />
          </div>
          <div class="relative max-h-[550px]">
            <div>
              <div className="bg-black/30 absolute top-0 right-0 w-full h-full"></div>
              <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                {Date(post[1].date).slice(4, 16)}
              </p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold 5 text-white">
                  {post[1].title}
                </h2>
                <p class="text-base leading-4 text-white mt-2">
                  {post[1].description}
                </p>
                <Link
                  href={`/blog/${post[0].slug}`}
                  class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg
                    class="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={post[1].coverImage}
              alt="sitting place"
              class="w-full object-cover h-full "
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:w-[70%]  w-[90%]  gap-10 py-5">
          {morePost.map((item, index) => (
            <div class="relative max-h-[350px]">
              <div>
                <div className="bg-black/30 absolute top-0 right-0 w-full h-full"></div>
                <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {Date(item.date).slice(4, 16)}
                </p>
                <div class="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">
                    {item.title}
                  </h2>
                  <p class="text-base leading-4 text-white mt-2">
                    {item.description}
                  </p>
                  <Link
                    href={`/blog/${post[0].slug}`}
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <img
                src={item.coverImage}
                alt="sitting place"
                class="w-full object-cover h-full "
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Page;
