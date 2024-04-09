"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Navbar";
import { IconCategory2 } from "@tabler/icons-react";
import { regEx } from "@/components/regEx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Snackbar } from "@mui/material";
import Loader from "@/components/loader/Loader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Page = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    datetime: "",
    subject: "",
    message: "",
  });

  const [check, setCheck] = useState(false);
  const [submitDisabled, setSubmitDisbaled] = useState(false);
  let currentDate = new Date().toJSON().slice(0, 10);
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
        await axios.post(`${process.env.webURL}/api/login`, data);

        setSnackQ(true);
        setData({
          name: "",
          email: "",
          phone: "",
          datetime: "",
          subject: "",
          message: "",
        });
        setLoader(false);
        setDateError(false);
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);
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
        data.datetime !== "" && data.datetime > currentDate ? false : true
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
  console.log(data);
  return (
    <>
      {snackQ && (
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
      )}
      {loader ? <Loader /> : ""}

      <Header />
      <div class="flex justify-center my-2 mx-4 md:mx-0 min-h-[60vh] items-center">
        <form
          class="md:w-[60%] w-[90%] bg-white rounded-lg shadow-md p-6 flex flex-col gap-3 my-10 border"
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
          <div class="grid md:grid-cols-3 md:gap-10">
            <div class="w-full ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
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
            </div>
            <div class="w-full ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
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
            </div>
            <div class="w-full ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                placeholder="Enter your phone number"
                value={data.phone}
                inputClass="!w-full"
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
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-10">
            <div class="w-full ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Date & Time
              </label>
              <input
                type="datetime-local"
                name="datetime"
                min={currentDate + "T00:00"}
                onChange={handleChange}
                value={data.datetime}
                className={dateError === true ? inputErrorCss : inputCss}
                placeholder="When you need it Choose date and time "
                required
              />
            </div>
            <div class="w-full ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
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
            </div>
          </div>
          <div class="w-full ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Password"
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
                    regEx[3].emailTextValidation,
                    ""
                  ),
                });
              }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <div class="w-full ">
            <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
              Get a free quote
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Page;
