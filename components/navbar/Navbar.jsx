import Image from "next/image";
import { IconMenu2 } from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="flex justify-center  fixed top-0 h-[70px] z-50 w-full shadow-2xl bg-white">
      <div className="flex items-center md:justify-between w-[75%] justify-center">
        <div className="block lg:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Menu"
            >
              <IconMenu2 className="w-8 h-8" />
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
        </div>
        <div>
          <Image
            src="/images/logo.webp"
            loading="eager"
            alt="Logo"
            width={300}
            height={300}
            className="lg:w-full w-[80%]"
          />
        </div>
        <div className="hidden lg:block">
          <ul className="flex px-1 gap-3 text-lg">
            <li>
              <span className="p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500">
                Home
              </span>
            </li>
            <li>
              <span className="p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500">
                About Us
              </span>
            </li>
            <li>
              <span className="p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500">
                Service
              </span>
            </li>
            <li>
              <span className="p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500">
                Pricing
              </span>
            </li>
            <li>
              <span className="p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500">
                Testimonials
              </span>
            </li>
            <li>
              <span className="p-2 bg-orange-600 text-white rounded hover:bg-orange-700/90 cursor-pointer">
                Call Now
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
