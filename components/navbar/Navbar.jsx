import Image from "next/image";
import logo from "@/public/images/logo.webp";
import { IconCactus } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="navbar md:pl-8 rounded-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Menu"
            >
              <IconCactus className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
            >
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>About Us</span>
              </li>
              <li>
                <span>Service</span>
              </li>
              <li>
                <span>Pricing</span>
              </li>
              <li>
                <span>Testimonials</span>
              </li>
              <li>
                <span>Offer Now </span>
              </li>
            </ul>
          </div>
          <span
            className="btn btn-ghost text-xl hover:bg-white"
            aria-label="Menu"
          >
            <Image src={logo} height={150} width={250} alt="Logo" />
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-lg">
            <li>
              <span className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Home
              </span>
            </li>
            <li>
              <span className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                About Us
              </span>
            </li>
            <li>
              <span className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Service
              </span>
            </li>
            <li>
              <span className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Pricing
              </span>
            </li>
            <li>
              <span className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Testimonials
              </span>
            </li>
            <li>
              <span className=" bg-red-600 hover:shadow-lg text-white font-semibold hover:text-red-600 border hover:border-red-600 py-1 px-2">
                Offer Now
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
