import { IconCheck } from "@tabler/icons-react";

const Pricing = () => {
  return (
    <div className=" min-h-[60vh] py-12 flex flex-col gap-8 items-center justify-center ">
      <div className="text-4xl md:text-5xl font-extrabold text-black text-center md:text-left pb-6">
        Assignment Pricing
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-tr from-blue-100 to-blue-400 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-blue-300 "></div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Executable Code
            </h2>
            <p className="text-gray-600 mb-6">12 Hours to 3 Days</p>
            <p className="text-4xl font-bold text-gray-800 mb-6">$25</p>
            <ul className="text-sm text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Course Access
              </li>
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Online Examination
              </li>
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Free Teacher Consulting
              </li>
              <li className="flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Automatic Cloud Backups
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-blue-100 to-blue-400 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-blue-300 "></div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Well-Commented Code
            </h2>
            <p className="text-gray-600 mb-6">12 Hours to 3 Days</p>
            <p className="text-4xl font-bold text-gray-800 mb-6">$30</p>
            <ul className="text-sm text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Course Access
              </li>
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Online Examination
              </li>
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Free Teacher Consulting
              </li>
              <li className="flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Automatic Cloud Backups
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-blue-100 to-blue-400 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="p-1 bg-blue-300 "></div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Well-Commented Code & Report
            </h2>
            <p className="text-gray-600 mb-6">12 Hours to 5 Days</p>
            <p className="text-4xl font-bold text-gray-800 mb-6">$40</p>
            <ul className="text-sm text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Course Access
              </li>
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Online Examination
              </li>
              <li className="mb-2 flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Free Teacher Consulting
              </li>
              <li className="flex items-center">
                <IconCheck className="w-4 h-4 pr-1" />
                Automatic Cloud Backups
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple active:bg-blue-800">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
