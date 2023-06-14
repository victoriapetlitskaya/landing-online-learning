import React, { useState, useEffect } from "react";

import { HeroProps as Props } from "./Hero.types";
import Navbar from "./Navbar/Navbar";
import Button from "../global/Button/Button";
import Testimonials from "../Testimonials/Testimonials";
import HeroImages from "./HeroImages/HeroImages";

import Lines from "../../../public/assets/images/lines.svg";

const Hero: React.FC<Props> = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [navbarOpen]);

  return (
    <>
      <div
        className={`pt-[2.4rem] xl:pt-[5.2rem] px-[1.2rem] xl:px-[8.2rem] flex flex-col items-center w-full bg-lightBlue overflow-x-hidden shadow-sm rounded-b-[4rem] ${
          navbarOpen ? "max-h-screen h-screen" : ""
        }`}
      >
        <Navbar open={navbarOpen} setOpen={setNavbarOpen} />
        {!navbarOpen && (
          <div className="hidden xl:block absolute top-0 left-[7rem] z-10">
            <Lines />
          </div>
        )}
        {!navbarOpen && (
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="left w-full md:w-1/2 flex flex-col justify-center pt-[4rem] md:pt-[5rem] md:pb-[5rem] lg:pt-[10rem] lg:pb-[10rem]">
              <div className="bg-white rounded-[1rem] py-[1rem] px-[2.5rem] mb-[2rem] xl:mb-[1.5rem] w-full md:w-fit text-[1.6rem] text-center">
                Never stop learning
              </div>
              <h1 className="right text-primary font-bold text-[4rem] leading-[5rem] xl:text-[6.4rem] xl:leading-[7.5rem] mb-[2.8rem]">
                Grow up your skills by online courses with Vlearning
              </h1>
              <div className="flex gap-[2.4rem] xl:gap-[1.2rem] items-center flex-col xl:flex-row">
                <Button
                  title="EXPLORE PATH"
                  type="secondary"
                  customClasses="px-[3rem] w-fit"
                />
                <Testimonials />
              </div>
            </div>
            <div className="right flex">
              <HeroImages />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Hero.defaultProps = {};

export default Hero;
