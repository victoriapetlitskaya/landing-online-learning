import React from "react";

import { NavbarProps as Props } from "./Navbar.types";
import Button from "@/components/global/Button/Button";

import Logo from "../../../../public/assets/images/logo.svg";
import HamburgerSVG from "../../../../public/assets/icons/hamburger.svg";
import CloseSVG from "../../../../public/assets/icons/close.svg";

const Navbar: React.FC<Props> = (props) => {
  const { open, setOpen } = props;
  const links = ["Home", "Careers", "Blog", "About Us"];

  return (
    <>
      <div
        className={`flex justify-between items-center w-full xl:hidden ${
          open ? "h-full" : ""
        }`}
      >
        {!open && (
          <div className="w-[2.4rem] h-[2.4rem]" onClick={() => setOpen(true)}>
            <HamburgerSVG />
          </div>
        )}
        {open && (
          <div className="absolute left-0 top-0 h-screen max-h-screen w-screen overflow-hidden bg-lightGreen z-50 py-[2.4rem] px-[1.2rem]">
            <div
              className="w-[2.4rem] h-[2.4rem]"
              onClick={() => setOpen(false)}
            >
              <CloseSVG />
            </div>
            <div className="flex flex-col justify-between mt-[3.2rem] h-full">
              <div className="flex flex-col gap-[2rem] text-[1.8rem] text-grayS27L86 font-medium">
                {links.map((link, i) => (
                  <a
                    key={i}
                    className="border-b-solid border-b-[0.1rem] border-b-secondary pb-[0.4rem]"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-[0.8rem] text-[1.8rem] text-primary font-medium pb-[6rem]">
                <a>Log In</a>
                <a className="text-secondary">Sign Up</a>
              </div>
            </div>
          </div>
        )}
        <Logo />
      </div>
      <div className="navbar hidden xl:flex w-full flex-1 justify-between items-center z-20">
        <Logo />
        <div
          className={`flex gap-[8rem] text-[1.8rem] text-grayS27L86 font-medium`}
        >
          {links.map((link, i) => (
            <a key={i} className="hover:text-secondary cursor-pointer">
              {link}
            </a>
          ))}
        </div>
        <div className="buttons flex gap-[3.2rem]">
          <Button title="Log In" type="white" />
          <Button title="Sign Up" />
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
