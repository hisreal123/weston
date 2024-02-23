import React from "react";
import CustormButton from "../components/CustormButton";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const handleMessage = (e: any) => {
    e.preventDefault();

    toast.error("Clicked !!");
  };
  return (
    <div className="lg:px-0 lg:mt-[100px] mb-[50px]">
      <div className="h-full relative  flex  justify-center flex-col items-center ">
        <div className="top w-1/4 mx-auto text-center">
          <h2 className="font-bold text-3xl mb-4">CONTACT</h2>

          <p className="mb-4 font-light">
            Mauris primis turpis Laoreet magna felis mi amet quam enim curae.
            Sodales semper tempor dictum faucibus habitasse.
          </p>
        </div>

        <form
          className="border border-gray-400 flex flex-col w-fit px-10 py-5 space-y-3"
          onSubmit={handleMessage}
        >
          <input
            type="text"
            name="First Name"
            id=""
            className=" border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="Last Name"
            id=""
            className=" border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="Email"
            id=""
            className="border-b border-gray-700  p-2 w-fit outline-none"
            placeholder="Email"
            required
          />

          <input
            type="text"
            name="Phone"
            id=""
            className="border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="Phone"
            required
          />

          <textarea
            rows={4}
            cols={4}
            placeholder="Message"
            className="border-b border-gray-400  p-2 outline-none"
            required
          />

          <CustormButton
            context="SUBMIT"
            custom_style="border border-gray-700 w-fit mx-auto mt-3 px-6 hover:bg-black hover:text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
