"use client";
import { useState } from "react";
import {
  Icon3dCubeSphere,
  IconChecks,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import axios from "axios";
import "./style.css";
import { IconCalculatorOff } from "@tabler/icons-react";

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
    <div className="hero pt-40 pb-16 rounded ">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="pt-3 pb-1">
            Your Details have been submitted. Our expert will contact you asap.
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
      <div className="hero-content flex-col lg:flex-row-reverse text-white gap-12 ">
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
            className="card-body text-black z-1"
            method="POST"
            // onSubmit={handleSubmit}
          >
            <div className="form-control h-[74px]">
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
            <div className="form-control h-[74px]">
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
            <div className="form-control h-[74px]">
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
                rows={3}
              />
            </div>
            <div className="form-control mt-6" onClick={handleSubmit}>
              <button className="border border-slate-600 shadow shadow-slate-600 hover:bg-slate-900 hover:text-white font-semibold h-11 rounded">
                Request a Quote
              </button>
            </div>
          </form>
        </div>

        <div className="text-center lg:text-left  ">
          <div className="md:text-6xl text-5xl md:w-[520px] w-full font-bold ">
            Exam Help Online
          </div>
          <div className="text-xl font-semibold pt-5 pb-1 text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            fugit!.
          </div>
          <div className="pt-8 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start ">
            <div className="flex gap-2 lg:w-[300px] text-lg items-end">
              <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500/70 text-white justify-center items-center rounded ">
                <IconChecks width={18} />
              </div>
              Operating System
            </div>
            <div className="flex gap-2 lg:w-[300px] text-lg items-end">
              <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500/70 text-white justify-center items-center rounded ">
                <IconChecks width={18} />
              </div>
              Operating System
            </div>
            <div className="flex gap-2 lg:w-[300px] text-lg items-end">
              <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500/70 text-white justify-center items-center rounded ">
                <IconChecks width={18} />
              </div>
              Operating System
            </div>
            <div className="flex gap-2 lg:w-[300px] text-lg items-end">
              <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500/70 text-white justify-center items-center rounded ">
                <IconChecks width={18} />
              </div>
              Operating System
            </div>
            <div className="flex gap-2 lg:w-[300px] text-lg items-end">
              <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500/70 text-white justify-center items-center rounded ">
                <IconChecks width={18} />
              </div>
              Operating System
            </div>
            {/* <div className="py-2 px-3 bg-blue-600 text-white font-semibold  rounded w-24 pl-4 mt-4 text-xl">
              <button> Call Us </button>
            </div> */}

            <div className="bg-white py-2 px-4 rounded-xl flex flex-col md:flex-row text-black gap-3 mt-12">
              <div className="flex gap-1.5 px-2  ">
                <div className="flex flex-col gap-1 items-center">
                  <div className="text-sm font-semibold flex gap-1 pl-1 ">
                    <div>
                      <Icon3dCubeSphere className="w-5 h-5" />
                    </div>
                    <div className="text-xs pt-0.5">Clients Reviews</div>
                  </div>
                  <div className="bg-orange-700 py-0.5 h-6 rounded ml-2">
                    <div className="flex text-white justify-center px-1 gap-1">
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold p-2">5.0</div>
              </div>

              <div className="flex gap-1.5 md:border-x-2 px-2 ">
                <div className="flex flex-col gap-1 items-center">
                  <div className="text-sm font-semibold flex gap-1 pl-1 ">
                    <div>
                      <IconStarFilled className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="text-xs pt-0.5">Clients Reviews</div>
                  </div>
                  <div className="bg-orange-700 py-0.5 h-6 rounded ml-2">
                    <div className="flex text-white justify-center px-1 gap-1">
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarHalfFilled className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold p-2">4.5</div>
              </div>

              <div className="flex gap-1.5 px-2 ">
                <div className="flex flex-col gap-1 items-center">
                  <div className="text-sm font-semibold flex gap-1 pl-1 ">
                    <div>
                      <IconCalculatorOff className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="text-xs pt-0.5">Sitejabber</div>
                  </div>
                  <div className="bg-orange-700 py-0.5 h-6 rounded ml-2">
                    <div className="flex text-white justify-center px-1 gap-1">
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarFilled className="w-5 h-5" />
                      <IconStarHalfFilled className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-semibold p-2">4.2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
