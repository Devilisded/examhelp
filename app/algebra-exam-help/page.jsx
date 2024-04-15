import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServiceHero from "@/components/serviceHero/ServiceHero";
import ExpertCarousel from "@/components/expertCarousel/ExpertCarousel";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";

import {
    IconClock2,
    IconGraph,
    IconWorld,
    IconReportAnalytics,
    IconPigMoney,
    IconChevronDown,
} from "@tabler/icons-react";
import Link from "next/link";
import { IconSchool } from "@tabler/icons-react";
import Faq from "@/components/faq/Faq";
import Layout from "@/components/layout/Layout";
export const metadata = {
    title: " Looking For The Best Algebra Exam Help?",
    description:
        "Are you dreading your Algebra Exam? Get Algebra Exam Help Online! Master equations, solve problems, and boost your confidence.",
    openGraph: {
        title: "Looking For The Best Algebra Exam Help?",
    },
};
const Page = () => {
    const faq = [
        {
          question:
            "What kind of Algebra exam assistance do you offer?",
          answer:
            "Our expert tutors can assist with the following:<li>Understanding algebra concepts </li> <li>Getting over challenging questions</li> <li>Exam Preparation</li> <li>Gaining confidence in algebra.</li>"
        },
        {
          question:
            "How can your tutors help me improve my Algebra skills? ",
          answer:
            "Our tutors will take a personalized approach. They will help you identify weak areas and provide focused instructions. Moreover, they can teach you good study habits and give helpful test tips."
        },
        {
            question:
              "What are the benefits of using your Algebra exam help service? ",
            answer:
              "The advantages of using our Algebra exam help include:<li> A better understanding of concepts in Algebra </li><li>Increased ability to solve problems</li><li> More self-assured during exams </li><li>Improved grades in math.</li>",
          },
      ];
    return (
        <>
            <link
                rel="canonical"
                href="https://examhelp.online/algebra-exam-help"
            />
            <Navbar />

            <ServiceHero
                title="Need An Expert To Offer You With The Best Algebra Exam Help?"
                desc="Are you dreading your Algebra Exam? Get Algebra Exam Help Online! Master equations, solve problems, and boost your confidence."
            />
            <Layout>
            <div className="py-10">
                <h1 className="text-4xl text-center font-semibold mb-10">
                    Our Experts
                </h1>
                <ExpertCarousel />
            </div>
            </Layout>
            {/* <div className="py-10" itemScope itemType="https://schema.org/FAQPage">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQs</h2>
                    <p className="text-neutral-500 text-xl mt-3">
                        Frequenty Asked Questions
                    </p>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
                    <div
                        className="py-5 w-full"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                                <span> What kind of Algebra exam assistance do you offer?</span>
                                <span className="transition group-open:rotate-180">
                                    <IconChevronDown />
                                </span>
                            </summary>
                            <div
                                className="py-5"
                                itemScope
                                itemProp="mainEntity"
                                itemType="https://schema.org/Question"
                            >  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn" itemProp="name">
                                    Our expert tutors can assist with the following:</p>

                                <li>Understanding algebra concepts</li>
                                <li>Getting over challenging questions</li>
                                <li>Exam Preparation</li>
                                <li>Gaining confidence in algebra.</li></div>



                        </details>
                    </div>
                    <div
                        className="py-5"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                                <span> How can your tutors help me improve my Algebra skills?
                                </span>
                                <span className="transition group-open:rotate-180">
                                    <IconChevronDown />
                                </span>
                            </summary>
                            <div
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            ><p className="text-neutral-600 mt-3 group-open:animate-fadeIn" itemProp="name">
                                    Our tutors will take a personalized approach. They will help you identify weak areas and provide focused instructions. Moreover, they can teach you good study habits and give helpful test tips.
                                </p></div>

                        </details>
                    </div>
                    <div
                        className="py-5"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                                <span>
                                    {" "}
                                    What are the benefits of using your Algebra exam help service?
                                </span>
                                <span className="transition group-open:rotate-180">
                                    <IconChevronDown />
                                </span>
                            </summary>
                            <div
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"><p className="text-neutral-600 mt-3 group-open:animate-fadeIn" itemProp="name">
                                    The advantages of using our Algebra exam help include: </p>

                                <li>A better understanding of concepts in Algebra</li>
                                <li>Increased ability to solve problems</li>
                                <li>More self-assured during exams</li>
                                <li>Improved grades in math.</li></div>



                        </details>
                    </div>
                </div>
            </div> */}
      <Faq qs={faq} />
            <Footer />
        </>
    );
};

export default Page;
