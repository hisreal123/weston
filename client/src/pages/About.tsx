import React from "react";

import { Link } from "react-router-dom";
import CustormButton from "../components/CustormButton";
import Team from "../components/Team";

const About: React.FC = () => {
  return (
    <>
      <div className="lg:px-0 mt-[50px] lg:mt-[0]">
        <div className="lg:flex lg:space-x-3 max-h-screen h-screen">
          <div className="px-5 lg:px-8 left lg:w-fit lg:h-full relative h-screen -translate-y-15 lg:translate-y-2 justify-center flex flex-col space-y-7 ">
            <h1 className="text-3xl font-bold md:w-4/5 md:text-5xl ">
              MEET THE WESTON REAL ESTATE
            </h1>
            <p className="text-xs md:text-sm text-[#808080] md:w-4/5">
              Meet the Weston Real Estate, your premier destination for
              personalized property solutions.
            </p>
            <p className="text-xs md:text-sm text-[#808080] md:w-4/5">
              At Weston Real Estate, we don't just sell houses; we create
              lasting connections and turn dreams into reality.
            </p>

            <div className="flex relative">
              <Link to="/about">
                <CustormButton
                  context="READ MORE"
                  custom_style="border border-black/80 hover:bg-black hover:text-white "
                />
              </Link>
            </div>
          </div>
          <div className="right hidden lg:block  relative overflow-hidden">
            <div className="lg:block relative">
              <img
                src="./assets/home_img.svg"
                alt="home_img"
                height={100}
                width={100}
                className="h-full w-full"
              />
            </div> 
          </div>
        </div>
      </div>

      {/* TEAM ACCOLADES */}
      <section className="bg-accolade  bg-cover  bg-no-repeat  h-[400px] mt-10 py-4">
        <h1 className="text-white font-bold text-center ">TEAM ACCOLADES</h1>
        <div className="wrap flex items-center justify-center h-full w-full">
          <div className="bg-black h-4/5 w-4/5 md:w-1/2 mx-auto text-white flex justify-center">
            <div className="relative top-20  px-3 py-2 flex w-fit ">
              {/* left*/}
              <div className="left">
                <div className="text-center font-bold py-2">
                  <h5 className="text-xs mb-2 lg:mb-3 ">35+</h5>
                  <p className="text-[.5rem] lg:text-[.7rem]">
                    COMBINED YEARS IN BUSINESS
                  </p>
                </div>
                <div className="text-center font-bold mx-2 lg:mx-5 py-2">
                  <h5 className="text-xs mb-2 lg:mb-3 ">$2b+</h5>
                  <p className="text-[.5rem] lg:text-[.7rem]">
                    OVER 1 BILLION IN TOTAL SALES
                  </p>
                </div>
                <div className="text-center font-bold py-2">
                  <h5 className="text-xs mb-2 lg:mb-3 ">4%</h5>
                  <p className="text-[.5rem] lg:text-[.7rem]">
                    LIST TO SOLD AVERAGE
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="right">
                <div className="text-center font-bold py-2">
                  <h5 className="text-xs mb-2 lg:mb-3">1.5%</h5>
                  <p className="text-[.5rem] lg:text-[.7rem]">
                    TOP 1.5% OF TEAMS NATIONWIDE
                  </p>
                </div>
                <div className="text-center font-bold mx-2 lg:mx-5 py-2">
                  <h5 className="text-xs mb-2 lg:mb-3">150M+</h5>
                  <p className="text-[.5rem] lg:text-[.7rem]">
                    DEALS VOLUME IN PAST 12 MONTHS
                  </p>
                </div>
                <div className="text-center font-bold py-2">
                  <h5 className="text-xs mb-2 lg:mb-3">900+</h5>
                  <p className="text-[.5rem] lg:text-[.7rem]">
                    OF CHAMPAGINE BOTTLES DELIVERED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS OF TEAM */}
      <Team />
    </>
  );
};

export default About;
