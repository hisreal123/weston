import React, { ReactNode, useState } from "react";
import logo from "/assets/WESTON.svg";
import menu_icon from "/assets/bx_menu-alt-left.svg";
import close_icon from "/assets/clarity_window-close-line.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <>
      <div className="wrapper lg:flex lg:items-center lg:justify-between lg:px-5">
        <div className="flex py-4 px-2 lg:px-0 justify-between items-center">
          <Link to="/home">
            <img src={logo} alt="logo" className="block h cursor-pointer" />
          </Link>

          <img
            src={menu_icon}
            alt="logo"
            className="block cursor-pointer md:hidden lg:h-12"
            onClick={() => {
              setOpenNav(!openNav);
            }}
          />
        </div>

        {/* mobile device  */}
        {openNav && (
          <div
            className="fixed top-0 bottom-0 right-0 left-0 bg-white lg:block lg:relative lg:bg-none
        flex  flex-col justify-center"
          >
            <img
              src={close_icon}
              alt="logo"
              className="block cursor-pointer h-8 w-9 absolute top-4 right-4 md:hidden"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            />

            {[
              { name: "Home", link: "/home" },
              { name: "About", link: "/about" },
              { name: "Properties", link: "/properties" },
              { name: "Contact", link: "/contact" },
            ].map(
              ({ name, link }, index): ReactNode => (
                <div className=" w-[80%] mx-auto">
                  <Link
                    to={link}
                    key={index}
                    className="block border-b py-4  font-bold  hover:bg-white/75 w-full text-center"
                  >
                    {name}
                  </Link>
                </div>
              )
            )}
          </div>
        )}

        {/* Large screens */}

        <div className="hidden lg:flex  bg-white lg:relative lg:bg-none space-x-4">
          {[
            { name: "Home", link: "/home" },
            { name: "About", link: "/about" },
            { name: "Properties", link: "/properties" },
            { name: "Contact", link: "/contact" },
          ].map(
            ({ name, link }, index): ReactNode => (
              <div className=" ">
                <Link
                  to={link}
                  key={index}
                  className="inline-block  py-4  hover:bg-white/75 w-full text-center"
                >
                  {name}
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
