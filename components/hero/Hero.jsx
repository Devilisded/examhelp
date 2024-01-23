"use client";
import { useState } from "react";
import {
  Icon3dCubeSphere,
  IconChecks,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import axios from "axios";
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
          <p className="pt-2">
            Your Details have been submitted. Our expert will contact you asap.
          </p>
          <div className="flex justify-end ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="hero-content flex-col lg:flex-row-reverse text-black gap-12 md:gap-48 ">
        <div className="flex flex-col gap-9">
          <div className="text-center lg:text-left  ">
            <div className="md:text-6xl text-5xl md:w-[520px] w-full font-bold ">
              Exam Help Online
            </div>
            <div className="text-xl font-semibold pt-5 pb-1 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              fugit!.
            </div>
          </div>
          <div className="pt-8 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start ">
            <div className="flex gap-6">
              <div className="flex gap-2 lg:w-[300px] text-lg items-end">
                <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500 text-white justify-center items-center rounded ">
                  <IconChecks width={18} />
                </div>
                Operating System
              </div>
              <div className="flex gap-2 lg:w-[300px] text-lg items-end">
                <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500 text-white justify-center items-center rounded ">
                  <IconChecks width={18} />
                </div>
                Operating System
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 lg:w-[300px] text-lg items-end">
                <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500 text-white justify-center items-center rounded ">
                  <IconChecks width={18} />
                </div>
                Operating System
              </div>
              <div className="flex gap-2 lg:w-[300px] text-lg items-end">
                <div className="flex w-6 h-6 shadow-blue-600 shadow   bg-blue-500 text-white justify-center items-center rounded ">
                  <IconChecks width={18} />
                </div>
                Operating System
              </div>
            </div>
          </div>
          {/* numbers */}

          <div className=" border-t-2 border-0 border-slate-300 py-8 mt-8 flex gap-10 ">
            <div className="flex gap-2 w-48">
              <div className="text-5xl font-bold">40k</div>
              <div className="text-lg text-slate-400">Our Active User</div>
            </div>
            <div className="flex gap-2 w-48">
              <div className="text-5xl font-bold">3k</div>
              <div className="text-lg text-slate-400">Professional worker</div>
            </div>
            <div className="flex gap-2 w-48">
              <div className="text-5xl font-bold ">270k</div>
              <div className="text-lg text-slate-400">Solutions Delivered</div>
            </div>
          </div>

          {/* <div className="bg-white py-2 px-4 rounded-xl flex flex-col md:flex-row text-black gap-3 mt-12">
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
          </div> */}
        </div>

        {/* make form here */}
      </div>
    </div>
  );
};

export default Hero;
