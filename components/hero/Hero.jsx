"use client";
import { useState } from "react";
import backgnd from "@/public/images/backgnd.webp";
import Image from "next/image";
import { IconArrowBigRightLinesFilled, IconChecks } from "@tabler/icons-react";
import { IconCheck } from "@tabler/icons-react";
import axios from "axios";
import "./style.css";

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

    document.getElementById("my_modal_5").showModal();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClose = () => {
    console.log("yha aa gya ");
    setData({
      name: "",
      email: "",
      detail: "",
      num: "",
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200 rounded ">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="pt-3 pb-1">
            Your Details have been submitted. Our expert will contact you asap.{" "}
            <br /> <br /> Thanks for choosing us.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
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
                value={data.name}
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
                value={data.email}
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
                value={data.num}
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
                value={data.detail}
                onChange={handleChange}
                rows={4}
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
