"use client";
import { useState } from "react";
import backgnd from "@/public/images/backgnd.webp";
import Image from "next/image";
import { IconArrowBigRightLinesFilled, IconChecks } from "@tabler/icons-react";
import { IconCheck } from "@tabler/icons-react";
import axios from "axios";

const Hero = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    detail: "",
    num: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/api/login", data).then(() => {
      console.log("Inserted using axios");
    });
    console.log(data);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="hero min-h-screen bg-base-200 rounded"
      style={{
        backgroundImage: `url("/images/backgnd.webp") `,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse text-white gap-48 ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="pt-2 pl-[58px]">
            <div className="text-xl font-semibold text-black pl-11">
              SCORE HIGHER
            </div>
            <div className="text-md content-center text-slate-600 font-semibold pt-1">
              With our Exam Help Online Services
            </div>
          </div>
          <form
            className="card-body text-black"
            method="POST"
            // onSubmit={handleSubmit}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="Number"
                placeholder="Mobile Number"
                className="input input-bordered"
                name="num"
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs "
                  name="File"
                />
              </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Details"
                className="border p-2"
                name="detail"
                onChange={handleChange}
              />
            </div>
            <div className="form-control mt-6" onClick={handleSubmit}>
              <button className="border border-slate-600 shadow shadow-slate-600 hover:bg-slate-900 hover:text-white font-semibold h-11 rounded">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="text-center lg:text-left pr-12 ">
          <h1 className="text-6xl lg:w-[520px] font-bold ">Exam Help Online</h1>
          <div className="pt-16 flex flex-col gap-3">
            <div className="flex flex-col gap-12 font-semibold text-2xl  items-center">
              <div className="flex gap-16">
                <div className="flex gap-2 lg:w-[300px]">
                  <div className="flex w-8 h-8 shadow-orange-600 shadow   bg-orange-500/70 text-white justify-center items-center rounded ">
                    <IconChecks />
                  </div>
                  Operating System
                </div>
                <div className="flex gap-2 lg:w-[300px]">
                  <div className="flex w-8 h-8 shadow-orange-600 shadow   bg-orange-500/70 text-white justify-center items-center rounded ">
                    <IconChecks />
                  </div>
                  Computer Network
                </div>
              </div>
              <div className="flex gap-16">
                <div className="flex gap-2 lg:w-[300px]">
                  <div className="flex w-8 h-8 shadow-orange-600 shadow   bg-orange-500/70 text-white justify-center items-center rounded ">
                    <IconChecks />
                  </div>
                  Unix and Linux
                </div>
                <div className="flex gap-2 lg:w-[300px]">
                  <div className="flex w-8 h-8 shadow-orange-600 shadow   bg-orange-500/70 text-white justify-center items-center rounded ">
                    <IconChecks />
                  </div>
                  Soft Computing
                </div>
              </div>
              <div className="flex gap-16">
                <div className="flex gap-2 lg:w-[300px]">
                  <div className="flex w-8 h-8 shadow-orange-600 shadow   bg-orange-500/70 text-white justify-center items-center rounded ">
                    <IconChecks />
                  </div>
                  OOPS Concept
                </div>
                <div className="flex gap-2 lg:w-[300px]">
                  <div className="flex w-8 h-8 shadow-orange-600 shadow   bg-orange-500/70 text-white justify-center items-center rounded ">
                    <IconChecks />
                  </div>
                  Design and Algorithm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
