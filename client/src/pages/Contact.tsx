import React from "react";
import CustormButton from "../components/CustormButton";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { FormValues } from "../../index";
import axiosInstance from "../utils/api";

const Contact: React.FC = () => {
  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15 || values.firstName.length < 3) {
      errors.firstName = "Must be more that 3 and less than 15 ";
    }
  };

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.post("/api/message", values);
        if (res.status == 200) {
          toast.success("message sent to the server ");
          console.log(res);
        } else {
          console.log("Error sending message !");
        }
      } catch (err) {
        toast.error(" Error sending message !! ");
      }
    },
  });

  return (
    <div className="lg:px-0 mt-[100px] lg:mt-[100px] mb-[50px]">
      <div className="h-full relative flex  justify-center flex-col items-center ">
        <div className="top  md:w-1/4 mx-auto text-center px-10 md:px-3">
          <h2 className="font-bold text-3xl mb-4">CONTACT</h2>

          <p className="mb-4 font-light">
            Mauris primis turpis Laoreet magna felis mi amet quam enim curae.
            Sodales semper tempor dictum faucibus habitasse.
          </p>
        </div>

        <form
          className="border border-gray-400 flex flex-col w-fit px-10 py-5 space-y-3"
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            name="firstName"
            id="firstName"
            className=" border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? <>{formik.errors.firstName}</> : null}
          <input
            type="text"
            name="lastName"
            id=""
            className=" border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <input
            type="email"
            name="email"
            id="email"
            className="border-b border-gray-700  p-2 w-fit outline-none"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <input
            type="text"
            name="phone"
            id="phone"
            className="border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="Phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />

          <textarea
            rows={4}
            cols={4}
            id="message"
            name="message"
            placeholder="Message"
            className="border-b border-gray-400  p-2 outline-none"
            onChange={formik.handleChange}
            value={formik.values.message}
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
