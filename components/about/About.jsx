import aboutUs from "@/public/images/aboutUs.webp";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-white pb-20 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="text-2xl text-black font-bold justify-center items-center flex md:text-4xl  pb-10">
          About Exam Help Online
        </h2>
        <div className="flex justify-center items-center space-y-6 md:space-y-0 lg:flex-row lg:items-center gap-4 ">
          <div className="md:7/12 lg:w-4/12  rounded-lg px-8 pt-2 pb-4">
            <p className="mt-4 text-black text-lg ">
              We have thousands of exams experts for more than 50 + different
              subjects. Our exam experts possess higher educational
              qualifications from top colleges and years of taking exams for
              students. We have been helping the students for the last seven
              years, and we have served more than 18,750+ students with our
              services. Our experts are proficient in solving the exams for a
              wide range of important subjects such as statistics, accounting,
              medical, mathematics, finance, computer science, programming,
              management, nursing, history, chemistry, and many more subjects.
            </p>
          </div>
          <div className="md:7/12 lg:w-4/12  rounded-lg  px-8 pt-2 pb-4 text-lg">
            <p className="mt-4 text-black">
              We have thousands of exams experts for more than 50 + different
              subjects. Our exam experts possess higher educational
              qualifications from top colleges and years of taking exams for
              students. We have been helping the students for the last seven
              years, and we have served more than 18,750+ students with our
              services. Our experts are proficient in solving the exams for a
              wide range of important subjects such as statistics, accounting,
              medical, mathematics, finance, computer science, programming,
              management, nursing, history, chemistry, and many more subjects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// need to change at md ... so
// sm / md : flex col
// lg : flex row
