import React, { useState } from "react";
import logo from "/assets/logo_white.svg";
import { Link } from "react-router-dom";
import { MdMail } from "react-icons/md";
import CustormButton from "./CustormButton";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const SocialLinks = [
  { link: "", icon: <FaFacebook /> },
  { link: "", icon: <FaInstagram /> },
  { link: "", icon: <FaLinkedin /> },
  { link: "", icon: <FaTwitter /> },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;

    if (value) {
      toast.success("Thanks for subscribing to  our newsletter!");
      setEmail("");
    } else {
      toast.error("Enter an email address");
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <footer className="bg-black py-4 md:pb-10 px-3 overflow-hidden ">
        <div className="footer-wrapper w-full md:flex justify-between md:py-4">
          <div className="flex flex-col justify-center md:justify-start  items-center md:items-start w-full text-center md:w-fit">
            <Link to="/home" className="my-4 md:self-start">
              <img src={logo} alt="logo" className="block cursor-pointer" />
            </Link>

            <h3 className="font-bold text-neutral-50 ">
              Trusted Real Estate property for you
            </h3>
          </div>

          <div className="newsletter ">
            <span className="block md:mt-0 mt-10 mb-2 text-white text-xs md:text-sm md:mb-5">
              For exclusive news and market updates sign up for our newsletter.
            </span>
            <form
              className="input flex space-x-3 md:w-full md:justify-between"
              onSubmit={handleNewsletter}
            >
              <div className="flex bg-white items-center md:w-full">
                <MdMail className="text-[#333333] h-6 w-6" />
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" outline-none border-0 pl-2 placeholder:text-[#131212]"
                />
              </div>

              <CustormButton
                type="submit"
                context="SUBMIT"
                custom_style="border border-white text-white font-bold px-4"
              />
            </form>
          </div>

          <div className="contact text-white flex mt-7 md:mt-0 md:grid grid-cols-2 justify-between items-center">
            <div className="left text-xs ">
              <h3 className="font-bold mb-2">CONTACT US</h3>
              <p className="md:mt-0">+234 811 737 2716</p>

              <p>Contact@domain.com</p>

              <p className="w-1/2">32 ayeobasan str, ikodoru, Lagos</p>
            </div>
            <div className="right text-xs  md:h-full">
              <h3 className="font-bold mb-2">FOLLOW US</h3>

              <div className="flex space-x-2 md:self-start ">
                {SocialLinks.map((socialLink, index) => (
                  <Link
                    key={index}
                    to={socialLink.link}
                    className="text-lg block"
                  >
                    {socialLink.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="divider h-[.1rem] my-4 bg-white w-full"></div>

        <p className="text-white text-xs text-center md:text-left font-bold">
          Copyright 2022 @weston all Right Riserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
