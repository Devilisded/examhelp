"use client";
import { IconSend2 } from "@tabler/icons-react";
import { useState } from "react";
import axios from "axios";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    datetime: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.webURL}/api/login`, data);
      console.log("Mail has been sent");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      className="space-y-6 shadow-xl p-8 border border-slate-300 rounded-lg  bg-white"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="text-xl font-bold text-gray-900 dark:text-white">
        Get the Best Online Exam Help
      </div>

      <div>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter full name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          required
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          id="phone"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter your Number"
          required
        />
      </div>

      <div>
        <input
          type="datetime-local"
          name="datetime"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="When you need it Choose date and time "
          required
        />
      </div>

      <div>
        <select
          name="subject"
          id="subject"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
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
          <option value="Research Paper Writing">Research Paper Writing</option>
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
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full flex items-center  justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold align-middle rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit <IconSend2 className="w-5 h-5" />
      </button>
    </form>
  );
};

export default Form;
