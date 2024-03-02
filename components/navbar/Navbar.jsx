"use client";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [state, setState] = useState({
    add: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const closeDrawer = () => {
    setState(false);
  };

  const items = [
    {
      name: "Home",
      linkto: "/",
    },
    {
      name: "About Us",
      linkto: "/aboutUs",
    },

    {
      name: "Service",
      linkto: "#",
    },

    {
      name: "Pricing",
      linkto: "#",
    },
    {
      name: "Testimonials",
      linkto: "#",
    },

    {
      name: "Offer Now",
      linkto: "#",
    },
  ];

  const list = (anchor) => (
    <Box sx={{ width: 300 }} role="presentation">
      {anchor === "add" ? (
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={closeDrawer}
        >
          <div className="flex justify-between p-3 pt-4 ">
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
            <IconX
              className="w-8 h-8 ml-3 mr-4 b-3 cursor-pointer  text-slate-300"
              onClick={toggleDrawer("add", true)}
            />
          </div>

        
          <List>
            {items.map((item, index) => (
              
               <Link href={item.linkto}>
              <div key={item} className="p-2">
              {console.log(item.linkto)}
                <div className="p-2 pl-5 border-b ">
                  <ListItemText className=" " primary={item.name} />
                </div>
              </div>
               </Link>
            ))}
          </List>
          
        </Box>
      ) : (
        ""
      )}
    </Box>
  );

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={state["add"]}
        onClose={toggleDrawer("add", false)}
      >
        {list("add")}
      </Drawer>
      <div className="flex justify-center  sticky top-0 h-[70px] z-50 w-full shadow-2xl bg-white">
        <div className="flex items-center md:justify-between w-[75%] justify-center">
          <div className="block lg:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                aria-label="Menu"
              >
                <IconMenu2
                  className="w-8 h-8 ml-3 mr-5"
                  onClick={toggleDrawer("add", true)}
                />
              </div>
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
                <Link href="/">
                  <span className="p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/aboutUs">
                  <span
                    linkto="/aboutUs"
                    className="p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500"
                  >
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/aboutUs">
                  <span className="p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500">
                    Service
                  </span>
                </Link>
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
              <Link href="/contact">
                <span className="p-2 bg-orange-700 text-white rounded hover:bg-orange-900/90 cursor-pointer">
                  Call Now
                </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
