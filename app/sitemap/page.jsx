import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Navbar";
import { IconLink } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
const Page = () => {
  const slides = [
    {
      to: "/economics-exam-help",
      title: "Economics Exam Help",
    },
    {
      to: "/statistics-exam-help",
      title: "Statistics Exam Help",
    },
    {
      to: "/chemistry-exam-help",
      title: "Chemistry Exam Help",
    },
    {
      to: "/physics-exam-help",
      title: "Physics Exam Help",
    },
    {
      to: "/r-programming-exam-help",
      title: "R Programming Exam Help",
    },
    {
      to: "/calculus-exam-help",
      title: "Calculus Exam Help",
    },
    {
      to: "/sociology-exam-help",
      title: "Sociology Exam Help",
    },
    {
      to: "/biology-exam-help",
      title: "Biology Exam Help",
    },
    {
      to: "/engineering-exam-help",
      title: "Engineering Exam Help",
    },
    {
      to: "/computer-science-exam-help",
      title: "Computer Science Exam Help",
    },
    {
      to: "/accounting-exam-help",
      title: "Accounting Exam Help",
    },
    {
      to: "/science-exam-help",
      title: "Science Exam Help",
    },
    {
      to: "/finance-exam-help",
      title: "Finance Exam Help",
    },
    {
      to: "/management-exam-help",
      title: "Management Exam Help",
    },
    {
      to: "/nursing-exam-help",
      title: "Nursing Exam Help",
    },
    {
      to: "/psychology-exam-help",
      title: "Psychology Exam Help",
    },
    {
      to: "/english-exam-help",
      title: "English Exam Help",
    },
    {
      to: "/history-exam-help",
      title: "History Exam Help",
    },
    {
      to: "/business-exam-help",
      title: "Business Exam Help",
    },
    {
      to: "/geometry-exam-help",
      title: "Geometry Exam Help",
    },
    {
      to: "/java-exam-help",
      title: "Java Exam Help",
    },
    {
      to: "/marketing-exam-help",
      title: "Marketing Exam Help",
    },
    {
      to: "/civil-engineering-exam-help",
      title: "Civil Engineering Exam Help",
    },
    {
      to: "/mechanical-engineering-exam-help",
      title: "Mechanical Engineering Exam Help",
    },
    {
      to: "/algebra-exam-help",
      title: "Algebra Exam Help",
    },
    {
      to: "/corporate-accounting-exam-help",
      title: "Corporate Accounting Exam Help",
    },
    {
      to: "/maths-exam-help",
      title: "Maths Exam Help",
    },
    {
      to: "/linear-algebra-exam-help",
      title: "Linear Algebra Exam Help",
    },
    {
      to: "/political-science-exam-help",
      title: "Political Science Exam Help",
    },
    {
      to: "/financial-engineering-exam-help",
      title: "Financial Engineering Exam Help",
    },
    {
      to: "/cscs-exam-help",
      title: "CSCS Exam Help",
    },
    {
      to: "/literature-exam-help",
      title: "Literature Exam Help",
    },
    {
      to: "/econometrics-exam-help",
      title: "Econometrics Exam Help",
    },
    {
      to: "/geography-exam-help",
      title: "Geography Exam Help",
    },

    {
      to: "/information-technology-exam-help",
      title: "Information Technology Exam Help",
    },
    {
      to: "/philosophy-exam-help",
      title: "Philosophy Exam Help",
    },
    {
      to: "/social-work-exam-help",
      title: "Social Work Exam Help",
    },
    {
      to: "/zoology-exam-help",
      title: "Zoology Exam Help",
    },
    {
      to: "/macroeconomics-exam-help",
      title: "Macroeconomics Exam Help",
      },
      {
      to: "/microeconomics-exam-help",
      title: "Microeconomics Exam Help",
    },
    {
      to: "/humanities-exam-help",
      title: "Humanities Exam Help",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex justify-center py-5">
        <div className="w-[70%]">
          <div className="text-4xl text-semibold font-semibold flex flex-col gap-4 py-4">
            Sitemap
            <div className="w-full h-[2px] bg-gray-300/50"></div>
          </div>
          <div className="grid grid-cols-3 gap-5 py-4 ">
            {slides.map((item, index) => (
              <Link href={item.to} key={index}>
                <div
                  className="flex items-center text-blue-600 text-lg gap-1 justify-start"
                  key={item}
                >
                  <div className="text-slate-600">
                    <IconLink />
                  </div>
                  <span>{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
