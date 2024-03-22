"use client";
import Counter from "../counter/Counter";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Number = () => {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted By Students Worldwide
              </h2>
              <p className="text-lg leading-8 text-gray-700">
                We can help you score higher in your exams, our experts are
                available around the clock to help you out.
              </p>
            </div>
            <dl className="mt-12 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-blue-700/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Academic Papers Written
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-orange-600">
                  {counter && <Counter number={3521} />}+
                </dd>
              </div>
              <div className="flex flex-col bg-blue-700/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Papers Proofread
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-orange-600">
                  {counter && <Counter number={6396} />}+
                </dd>
              </div>
              <div className="flex flex-col bg-blue-700/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Years Of Experience
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-orange-600">
                  {counter && <Counter number={9} />}+
                </dd>
              </div>
              <div className="flex flex-col bg-blue-700/10 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Experts
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-orange-600">
                  {counter && <Counter number={500} />}+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Number;
