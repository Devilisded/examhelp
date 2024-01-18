import Image from "next/image";
import logo from "@/public/images/logo.webp";

const Navbar = () => {
  return (
    <div>
      <div className="navbar pl-8 rounded-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>Order No</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hover:bg-white">
            <Image src={logo} height={150} width={250} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-lg">
            <li>
              <a className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Home
              </a>
            </li>
            <li>
              <a className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                About Us
              </a>
            </li>
            <li>
              <a className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Service
              </a>
            </li>
            <li>
              <a className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Pricing
              </a>
            </li>
            <li>
              <a className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Testimonials
              </a>
            </li>
            <li>
              <a className=" hover:shadow-slate-600 hover:shadow-lg hover:bg-slate-200 font-semibold">
                Order Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
