"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Navbar";
import {
  IconCategory2,
  IconClock2,
  IconGraph,
  IconReportAnalytics,
  IconSchool,
} from "@tabler/icons-react";
import { regEx } from "@/components/regEx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Snackbar } from "@mui/material";
import Loader from "@/components/loader/Loader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import SweetAlert2 from 'react-sweetalert2';

import "./submit.css"
const Page = () => {
  const [swalProps, setSwalProps] = useState({});

  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    datetime: new Date(),
    subject: "",
    message: "",
    file:""
  });

  const [check, setCheck] = useState(false);
  const [submitDisabled, setSubmitDisbaled] = useState(false);
  let currentDate = new Date();
  const [snackQ, setSnackQ] = useState(false);

  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleChange = (e) => {
    setCheck(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitDisabled === false) {
      try {
        setLoader(true);
        const formData = new FormData();
        for(let i = 0;i<data.file.length;i++){
          formData.append(`file${i}`,data.file[i]);
        }
        formData.append("name",data.name);
        formData.append("email",data.email);
        formData.append("phone",data.phone);
        formData.append("datetime",data.datetime);
        formData.append("subject",data.subject);
        formData.append("message",data.message)
        await axios.post(`${process.env.webURL}/api/login`, formData);

        setSnackQ(true);
        setData({
          name: "",
          email: "",
          phone: "",
          datetime: "",
          subject: "",
          message: "",
          file:""
        });
        setLoader(false);
        setSwalProps({
          show: true,
          title: 'Thank You',
          text: 'We will get back to you soon.',
          icon: 'success',
      });                  
        setDateError(false);
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);
        setCheck(false);
        setSubjectError(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("error");
    }
  };

  const phoneErrorFun = () => {
    if (data.phone.length > 9) {
      return false;
    } else {
      return true;
    }
  };

  const emailErrorfun = () => {
    if (!regEx[0].emailRegex.test(data.email)) {
      setEmailError(true);
      return true;
    } else {
      setEmailError(false);
      return false;
    }
  };

  useEffect(() => {
    if (check) {
      setEmailError(emailErrorfun());
      setPhoneError(phoneErrorFun());
      setNameError(data.name.length < 1);
      setDateError(
        data.datetime !== "" && new Date(data.datetime) > currentDate ? false : true
      );
      setSubjectError(data.subject === "" ? true : false);

      if (
        phoneErrorFun() === false &&
        emailErrorfun() === false &&
        data.name.length > 0 &&
        data.subject.length > 0 &&
        data.datetime !== "" &&
        data.datetime > currentDate
      ) {
        setSubmitDisbaled(false);
      } else {
        setSubmitDisbaled(true);
      }
    }
  }, [check, handleSubmit, data]);

  const inputCss =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ";
  const inputErrorCss =
    "bg-gray-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ";
  return (
    <>
    <SweetAlert2 {...swalProps}/>

      {/* {snackQ && (
        <Snackbar
          ContentProps={{
            sx: {
              background: "green",
              color: "white",
              textAlign: "center",
            },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={snackQ}
          autoHideDuration={3000}
          onClose={() => setSnackQ(false)}
          message={
            "Thank You for showing interest, we will get back to you soon."
          }
        />
      )} */}
      {loader ? <Loader /> : ""}

      <Header />
      <div className="flex justify-center mx-4 md:mx-0 min-h-[60vh] items-center py-10">
        <form
          className="md:w-[60%] w-[90%] bg-white rounded-lg shadow-md p-6 flex flex-col gap-3 my-10 border"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="flex md:text-3xl text-xl items-center gap-1 font-bold text-slate-800">
              <IconCategory2 className="w-8 h-8 text-orange-600" /> LET US KNOW
              YOUR QUESTION
            </h1>
            <p className="text-slate-700 text-sm">
              Raise Your Grades with Professional Services. Get Free Quote for
              Your Requirements!
            </p>
          </div>
          <div className="grid md:grid-cols-3 md:gap-10">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                maxLength={100}
                value={data.name}
                onChange={(e) => {
                  setCheck(true);
                  setData({
                    ...data,
                    name: e.target.value.replace(regEx[4].textValidation, ""),
                  });
                }}
                className={nameError === true ? inputErrorCss : inputCss}
                placeholder="Enter full name"
                required
              />
          <div className="text-red-600 text-xs">{nameError?"Please enter your name...":""}</div>

            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                maxLength={50}
                value={data.email}
                onChange={(e) => {
                  setCheck(true);
                  setData({
                    ...data,
                    email: e.target.value.replace(
                      regEx[3].emailTextValidation,
                      ""
                    ),
                  });
                }}
                className={emailError === true ? inputErrorCss : inputCss}
                placeholder="name@company.com"
                required
              />
          <div className="text-red-600 text-xs">{emailError?"Please Enter Your Email...":""}</div>

            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                placeholder="Enter your phone number"
                value={data.phone}
                inputclassName="!w-full"
                // value={phoneNumber}
                // onChange={handleChange}
                onChange={(value) => {
                  setCheck(true);
                  setData({
                    ...data,
                    phone: value,
                  });
                }}
              />
          <div className="text-red-600 text-xs">{phoneError?"Please Enter Phone Number...":""}</div>

            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-10">
            <div className="w-full ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Date & Time
              </label>
              {/* <input
                type="datetime-local"
                name="datetime"
                min={currentDate + "T00:00"}
                onChange={handleChange}
                value={data.datetime}
                className={dateError === true ? inputErrorCss : inputCss}
                placeholder="When you need it Choose date and time "
                required
              /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker  className="w-full" minDate={dayjs(new Date())}   value={dayjs(data.datetime)} onChange={(value)=>setData({...data,datetime : value.$d})}
           />
          </LocalizationProvider>
          <div className="text-red-600 text-xs">{dateError?"Please Choose a different date":""}</div>

            </div>
            <div className="w-full ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Subject
              </label>
              <select
                name="subject"
                value={data.subject}
                id="subject"
                className={subjectError === true ? inputErrorCss : inputCss}
                required=""
                onChange={handleChange}
              >
                <option value="" disabled="">
                  Choose your subject
                </option>
                <option value="C Programming">C Programming</option>
                <option value="C++ Programming">C++ Programming</option>
                <option value="Java Programming">Java Programming</option>
                <option value="Python Programming">Python Programming</option>
                <option value="Raptor Programming">Raptor Programming</option>
                <option value="Assembly Programming">
                  Assembly Programming
                </option>
                <option value="Visual Studio Programming">
                  Visual Studio Programming
                </option>
                <option value="C Sharp Programming">C Sharp Programming</option>
                <option value="Android Programming">Android Programming</option>
                <option value="Data structures &amp; Algorithms">
                  Data structures &amp; Algorithms
                </option>
                <option value="Database">Database</option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Operating System">Operating System</option>
                <option value="Computer Network">Computer Network</option>
                <option value="UML Diagrams">UML Diagrams</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics &amp; Discrete">
                  Mathematics &amp; Discrete
                </option>
                <option value="Electronics &amp; Electrical Help">
                  Electronics &amp; Electrical Help
                </option>
                <option value="Matlab &amp; Mathematica">
                  Matlab &amp; Mathematica
                </option>
                <option value="Statistics &amp; Analysis">
                  Statistics &amp; Analysis
                </option>
                <option value="Data Mining">Data Mining</option>
                <option value="Project Management">Project Management</option>
                <option value="MS Office">MS Office</option>
                <option value="R Programming">R Programming</option>
                <option value="Weka, Rapid Miner &amp; XLMiner">
                  Weka, Rapid Miner &amp; XLMiner
                </option>
                <option value="Technical Paper Writing">
                  Technical Paper Writing
                </option>
                <option value="IT Write Up Assignments">
                  IT Write Up Assignments
                </option>
                <option value="Assignment Writing">Assignment Writing</option>
                <option value="Online Quiz">Online Quiz</option>
                <option value="Online Quiz">HTML CSS and bootstrap </option>
                <option value="Research Paper Writing">
                  Research Paper Writing
                </option>
                <option value="Statistics"> Statistics</option>
                <option value="History"> History</option>
                <option value="Management"> Management</option>
                <option value="Economics"> Economics</option>
                <option value="Marketing"> Marketing</option>
                <option value="Math"> Math</option>
                <option value="Political Science"> Political Science</option>
                <option value="Java"> Java</option>
                <option value="Other"> Other</option>
              </select>
          <div className="text-red-600 text-xs">{subjectError?"Please Choose Your Subject...":""}</div>

            </div>
          </div>
          <div className="w-full ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Password"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              value={data.message}
              onChange={(e) => {
                setCheck(true);
                setData({
                  ...data,
                  message: e.target.value.replace(
                    regEx[4].textValidation,
                    ""
                  ),
                });
              }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <input type="file" onChange={({target})=>setData({...data,file:target.files})}  multiple className="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400"  />
          <div className="w-full ">
            <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500">
              Get a free quote
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-gray-800 rounded-2xl flex  justify-between flex-row flex-wrap">
              <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                <div className="block">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Accomplish tasks swiftly with exam help online.
                </h3>
                <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                  Get quoted and covered in under 10 minutes online. no
                  paperwork or waiting any more{" "}
                </p>
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <img
                  src="/images/sub.png"
                  alt="Header tailwind Section"
                  className="h-full ml-auto"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-blue-500 rounded-2xl p-5  xl:p-8 h-full">
              <div className="block">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Worldwide Access
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                As an online platform, we allow you to connect with expert
                tutors remotely.
              </p>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
              <div className="block">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Affordable Pricing
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                Our platform allows tutors to set reasonable rates, keeping
                pricing competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-12">
        <div className="mx-auto max-w-[75rem] sm:px-6 lg:px-8">
          <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group cursor-pointer relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <IconClock2 className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Save Time
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Our service takes the exam burden off your shoulders so you can
                allocate that time to other priorities.
              </p>
            </div>
            <div className="group cursor-pointer relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <IconSchool className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Domain Expertise
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Our experts have the greatest depth of knowledge to tackle any
                topic or question within their field, lending you their insight
                and guidance.
              </p>
            </div>
            <div className="group cursor-pointer relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <IconGraph className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Customized Assistance
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                It's like having a private tutor designing a fully customized
                study plan to help you succeed.
              </p>
            </div>
            <div className="group cursor-pointer relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-600">
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                <IconReportAnalytics className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Secure Service
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                Exam integrity is vital, so our top priority is safeguarding
                your information during online exam assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
