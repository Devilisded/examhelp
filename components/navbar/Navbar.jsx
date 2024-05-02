"use client";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const path = usePathname();
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
      name: "Blog",
      linkto: "/blog",
    },
    {
      name: "Experts",
      linkto: "/experts",
    },
    {
      name: "Reviews",
      linkto: "/reviews",
    },
    {
      name: "Exam Help",
      linkto: "/sitemap",
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
              <Link href={item.linkto} key={index}>
                <div className="p-2">
                  <div className="p-2 pl-5 border-b ">
                    <ListItemText className=" " primary={item.name} />
                  </div>
                </div>
              </Link>
            ))}
            <Link href="/submit-work">
              <div className="p-2">
                <div className="p-2 pl-5 border-b ">
                  <ListItemText className=" " primary={"Submit Work"} />
                </div>
              </div>
            </Link>
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
      <div className="flex justify-center sticky top-0 h-[70px] z-50 w-full shadow-2xl bg-white">
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
            <Link href="/">
              <Image
                src="/images/logo.png"
                loading="eager"
                alt="Logo"
                width={200}
                height={200}
                className=" w-[55%]"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex px-1 gap-3 text-lg">
              {items.map((item, index) => (
                <li key={index}>
                  <Link href={item.linkto}>
                    <span
                      className={
                        path === item.linkto
                          ? "p-2 border-b-2 cursor-pointer font-semibold text-[15px] uppercase  text-orange-500 border-orange-500"
                          : "p-2 hover:border-b-2 cursor-pointer font-semibold text-[15px] uppercase text-slate-800 hover:text-orange-500 border-orange-500"
                      }
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/submit-work">
                  <span className="p-2 bg-orange-700 text-white rounded hover:bg-orange-900/90 cursor-pointer">
                    Submit Work
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
