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
      <div className="flex justify-center flex-col items-center text-5xl md:text-7xl  font-semibold py-8 mainDiv text-white">
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
      </div>

      <div className="grid grid-cols-2 p-12 gap-8">
        <Image src={office} className="object-cover max-h-[400px]" />
        <div className="flex flex-col gap-6 items-start justify-start">
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
            Access 24/7 to online practice tests modeled closely after the real
            exams. Our tests are designed to help you identify strengths and
            weaknesses so you can focus your study time effectively.
          </div>
          <div className="text-md md:text-lg flex items-center gap-8">
            <IconAtom2 color="red" className="w-16 h-16" />
            One-on-one tutoring with instructors who specialize in your exam.
            Get personalized support, ask questions, review mistakes, and gain
            confidence. Our tutors have scored in the top 10% on the exams they
            teach.
          </div>
          <div className="text-md md:text-lg flex items-center gap-8">
            <IconAtom2 color="red" className="w-16 h-16" />
            On-demand homework help and subject tutoring. Whether you need help
            mastering algebra, writing an essay, or studying for a biology test,
            our tutors are here to help students of all ages and grades.
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row  md:mx-12 md:ml-24 gap-4 lg:gap-24 pb-10 md:pb-16">
        <div className="flex flex-col gap-4 justify-center mx-16 md:mx-0">
          <div className="text-lg md:text-2xl font-semibold ">
            At Exam Help Online, we want each student to achieve their full
            potential. We offer affordable test prep programs, flexible tutoring
            options, and great customer service. Thousands of students have used
            our services to get into their dream colleges and do well in school.
          </div>
          <div className="text-md lg:text-xl text-slate-700 font-semibold">
            Contact us today to learn how we can customize a test prep or
            tutoring program to match your specific needs and goals.
          </div>
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
