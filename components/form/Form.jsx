
"use client";
import { IconSend2 } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { regEx } from "../regex";
import { Snackbar } from "@mui/material";



const Form = ( {toggleLoader }) => {

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
		toggleLoader(true);
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
		toggleLoader(false);
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

  return (
    <>
	
      <form
        className="space-y-6 shadow-xl p-8 border border-slate-300 rounded-lg  bg-white"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="text-xl font-bold text-gray-900 ">
          Get the Best Online Exam Help
        </div>

        <div>
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
        <div>
          <input
            type="email"
            name="email"
            maxLength={50}
            value={data.email}
            onChange={(e) => {
				setCheck(true);
              setData({
                ...data,
                email: e.target.value.replace(regEx[3].emailTextValidation, ""),
              });
            }}
            className={emailError === true ? inputErrorCss : inputCss}
            placeholder="name@company.com"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            id="phone"
            maxLength={10}
            value={data.phone}
            onChange={(e) => {
				setCheck(true);
              setData({
                ...data,
                phone: e.target.value.replace(
                  regEx[2].phoneNumberValidation,
                  ""
                ),
              });
            }}
            className={phoneError === true ? inputErrorCss : inputCss}
            placeholder="Enter your Number"
            required
          />
        </div>

        <div>
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

        <div>
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
            <option value="Assembly Programming">Assembly Programming</option>
            <option value="Visual Studio Programming">
              Visual Studio Programming
            </option>
            <option value="C Sharp Programming">C Sharp Programming</option>
            <option value="Android Programming">Android Programming</option>
            <option value="Data structures &amp; Algorithms">
              Data structures &amp; Algorithms
            </option>
            <option value="Database">Database</option>
            <option value="Software Engineering">Software Engineering</option>
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
        <div>
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

        <button
          //type="submit"
        //   onClick={() => {
        //     setCheck(true);
        //   }}
          className="w-full flex items-center  justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold align-middle rounded-lg text-xl px-5 py-2.5 text-center "
        >
          Submit <IconSend2 className="w-5 h-5" />
        </button>

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
            autoHideDuration={1000}
            onClose={() => setSnackQ(false)}
            message={
              "Thank You for showing interest, we will get back to you soon."
            }
          />
        )}
      </form>
	
    </>
  );
};

export default Form;