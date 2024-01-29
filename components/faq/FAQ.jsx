import { IconChevronDown } from "@tabler/icons-react";

const FAQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen py-6 mb-8">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">
          Frequenty asked questions
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
        <div className="py-5 w-full">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
              <span> What is a SAAS platform?</span>
              <span className="transition group-open:rotate-180">
                <IconChevronDown />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              SAAS platform is a cloud-based software service that allows users
              to access and use a variety of tools and functionality.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
              <span> How does billing work?</span>
              <span className="transition group-open:rotate-180">
                <IconChevronDown />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              We offers a variety of billing options, including monthly and
              annual subscription plans, as well as pay-as-you-go pricing for
              certain services. Payment is typically made through a credit card
              or other secure online payment method.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
              <span> Can i get full refund ?</span>
              <span className="transition group-open:rotate-180">
                <IconChevronDown />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              If you need help with the platform or have any other questions,
              you can contact the company's support team by submitting a support
              request through the website or by emailing support@We.com.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
              <span> How do I contact support?</span>
              <span className="transition group-open:rotate-180">
                <IconChevronDown />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              If you need help with the platform or have any other questions,
              you can contact the company's support team by submitting a support
              request through the website or by emailing support@We.com.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
