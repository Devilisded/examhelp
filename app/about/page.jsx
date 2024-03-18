import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Navbar";
import Image from "next/image";
import office from "../../public/images/abt_3_1.jpg";
import contact from "../../public/images/abt_4_1.jpg";
import "./style.css";
import { IconAtom2 } from "@tabler/icons-react";

const Page = () => {
  return (
    <div>
      <Header />
      {/* <div className="flex justify-center flex-col items-center text-5xl md:text-7xl  font-semibold py-8 mainDiv text-white">
        About Us
        <div className="flex items-center flex-col">
          <div className="text-xl  text-center font-thin py-2 w-[80%]">
            Welcome to Exam Help Online, your top place for exam prep and
            tutoring services. We aim to help students succeed by providing
            great exam prep tools and personalized academic support. Established
            in 2010, Exam Help Online was created by teachers who understand
            students' challenges when prepping for big exams. We aim to take the
            stress out of test prep by offering:
          </div>
        </div>
      </div> */}
      <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
        <div class="relative z-10">
          <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width="200"
                  height="200"
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  stroke-width="0"
                ></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
        </div>
        <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Us
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Exam Help Online, your top place for exam prep and
              tutoring services. We aim to help students succeed by providing
              great exam prep tools and personalized academic support.
            </h2>
          </div>
        </div>
      </section>
      <div className="grid md:grid-cols-2 px-12 pt-12 gap-8">
        <Image src={office} className="object-cover max-h-[400px]" />
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">
            Established in 2010, Exam Help Online was created by teachers who
            understand students' challenges when prepping for big exams. We aim
            to take the stress out of test prep by offering:
          </p>
          <ul className="text-lg list-disc">
            <li className="py-4">
              {" "}
              Complete study guides and cheat sheets covering key concepts for
              major standardized tests. Tutors and teachers design our study
              materials with years of test prep experience.
            </li>
            <li className="py-4">
              {" "}
              Access 24/7 to online practice tests modeled closely after the
              real exams. Our tests are designed to help you identify strengths
              and weaknesses so you can focus your study time effectively.
            </li>
            <li className="py-4">
              {" "}
              One-on-one tutoring with instructors who specialize in your exam.
              Get personalized support, ask questions, review mistakes, and gain
              confidence. Our tutors have scored in the top 10% on the exams
              they teach.
            </li>
            <li className="py-4">
              {" "}
              On-demand homework help and subject tutoring. Whether you need
              help mastering algebra, writing an essay, or studying for a
              biology test, our tutors are here to help students of all ages and
              grades.
            </li>
          </ul>
          {/* <div className="flex flex-col gap-6 items-start justify-start">
            <div className="text-md md:text-lg flex items-center gap-8">
              <IconAtom2 color="red" className="w-16 h-16" />
              <div>
                Complete study guides and cheat sheets covering key concepts for
                major standardized tests. Tutors and teachers design our study
                materials with years of test prep experience.
              </div>
            </div>
            <div className="text-md md:text-lg flex items-center gap-8">
              <IconAtom2 color="red" className="w-16 h-16" />
              Access 24/7 to online practice tests modeled closely after the
              real exams. Our tests are designed to help you identify strengths
              and weaknesses so you can focus your study time effectively.
            </div>
            <div className="text-md md:text-lg flex items-center gap-8">
              <IconAtom2 color="red" className="w-16 h-16" />
              One-on-one tutoring with instructors who specialize in your exam.
              Get personalized support, ask questions, review mistakes, and gain
              confidence. Our tutors have scored in the top 10% on the exams
              they teach.
            </div>
            <div className="text-md md:text-lg flex items-center gap-8">
              <IconAtom2 color="red" className="w-16 h-16" />
              On-demand homework help and subject tutoring. Whether you need
              help mastering algebra, writing an essay, or studying for a
              biology test, our tutors are here to help students of all ages and
              grades.
            </div>
          </div> */}
        </div>
      </div>
      <div className="grid md:grid-cols-2 px-12 gap-8 place-items-center">
        <div className="text-2xl">
          At Exam Help Online, we want each student to achieve their full
          potential. We offer affordable test prep programs, flexible tutoring
          options, and great customer service. Thousands of students have used
          our services to get into their dream colleges and do well in school.
          Contact us today to learn how we can customize a test prep or tutoring
          program to match your specific needs and goals.
          <div className="text-md lg:text-xl text-slate-600 ">
            We look forward to helping you succeed!
            <br />
            <br />
            Email us at <span className="font-bold">info@examhelp.online</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={contact}
            className=" w-[300px] h-[300px] md:w-[400px] xl:w-[500px] md:h-[400px] xl:h-[500px] "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
