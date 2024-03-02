import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-end w-full bg-white">
      <footer className="w-full text-gray-700 bg-slate-800 body-font maindiv">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <div className="flex items-center justify-center font-medium text-white title-font md:justify-start">
              <h3>About Us</h3>
            </div>
            <p className="mt-2 text-sm text-gray-200">
              You can be confident that your personal information and
              examination details will remain completely confidential with us.
              We will never share that with anyone and ensure that it is not
              accessible to even specialists.
            </p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <div className="text-gray-200 cursor-pointer hover:text-gray-700">
                  <IconBrandFacebook />
                </div>
                <div className="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                  <IconBrandTwitter />
                </div>
                <div className="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                  <IconBrandInstagram />
                </div>
                <div className="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                  <IconBrandLinkedin />
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                About
              </div>
              <nav className="mb-10 list-none">
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Company
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Careers
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Blog
                  </div>
                </div>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Support
              </div>
              <nav className="mb-10 list-none">
                <div className="mt-3">
                <Link href="/contact">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Contact Support
                  </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Help Resources
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Release Updates
                  </div>
                </div>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Platform
              </div>
              <nav className="mb-10 list-none">
                
                
                <div className="mt-3">
                <Link href="/privacy">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Privacy
                  </div>
                  </Link>
                </div>
                
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Pricing
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    FAQ
                  </div>
                </div>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                Contact
              </div>
              <nav className="mb-10 list-none">
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Send a Message
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    Request a Quote
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-200 cursor-pointer hover:text-white">
                    +123-456-7890
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 ">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-white capitalize xl:text-center flex justify-center">
              © 2020 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
