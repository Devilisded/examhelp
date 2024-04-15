import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

const Faq = (props) => {
  return (
    <div className="py-10" itemScope itemType="https://schema.org/FAQPage">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQs</h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequenty Asked Questions
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
        {props.qs?.map((item, index) => (
          <div
            className="py-5 w-full"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            key={index}
          >
            <details className="group">
              <summary
                className="flex justify-between items-center font-medium cursor-pointer list-none text-xl"
                itemProp="name"
              >
                <span>{item.question}</span>
                <span className="transition group-open:rotate-180">
                  <IconChevronDown />
                </span>
              </summary>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p
                  className="text-neutral-600 mt-3 group-open:animate-fadeIn"
                  itemProp="text"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </details>
          </div>
        ))}
        {/* <div
          className="py-5 w-full"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <details className="group">
            <summary
              className="flex justify-between items-center font-medium cursor-pointer list-none text-xl"
              itemProp="name"
            >
              <span>
                {" "}
                What are the ways in which your service can be of help to me in
                my Civil Engineering exam?
              </span>
              <span className="transition group-open:rotate-180">
                <IconChevronDown />
              </span>
            </summary>
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p
                className="text-neutral-600 mt-3 group-open:animate-fadeIn"
                itemProp="text"
              >
                Our study pack is made up of past exams, textbooks, online
                courses, and other resources that will help you understand
                better and test your exam preparedness.
              </p>
            </div>
          </details>
        </div> */}
        {/* <div
          className="py-5"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <details className="group">
            <summary
              className="flex justify-between items-center font-medium cursor-pointer list-none text-xl"
              itemProp="name"
            >
              <span>
                {" "}
                I don’t have much time to study. Can this service work for me?
              </span>
              <span className="transition group-open:rotate-180">
                <IconChevronDown />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Yes! We offer focused study guides and customizable practice
              sessions to maximize your learning in a limited timeframe.
            </p>
          </details>
        </div>
        <div
          className="py-5"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <details className="group">
            <summary
              className="flex justify-between items-center font-medium cursor-pointer list-none text-xl"
              itemProp="name"
            >
              <span>
                {" "}
                Supposing I am stranded on a particular topic, how can I get
                your help?
              </span>
              <span className="transition group-open:rotate-180">
                <IconChevronDown />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              No problem! Our website has a “
              <Link
                href="/https://examhelp.online/contact"
                className="text-blue-600"
              >
                Contact Us
              </Link>
              ” page where you can reach out to our support team, which is
              composed of professionals in the field.
            </p>
          </details>
        </div> */}
      </div>
    </div>
  );
};

export default Faq;
