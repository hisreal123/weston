import React, { useState } from "react";
import CustormButton from "../components/CustormButton";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { FormValues } from "../../index";
import axiosInstance from "../utils/api";
import Loading from "../components/Loading";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.firstName) {
      errors.firstName = "Required";
      toast.error("First name is required ");
    } else if (values.firstName.length > 15 || values.firstName.length < 3) {
      errors.firstName = "Must be more that 3 and less than 15 ";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }

    // if (!values.phone) {
    //   errors.phone = "Required";
    // } else if (!/^[0-9]{10}$/.test(values.phone)) {
    //   errors.phone = "Invalid phone number";
    // }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
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
    onSubmit: async (values: FormValues, { resetForm }) => {
      setLoading(true);
      try {
        const res = await axiosInstance.post("/api/message", values);

        if (res.status === 200) {
          toast.success("Message sent to the server ");
          resetForm();
        }
        // else {
        //   console.log("Error sending message!");
        // }
      } catch (err) {
        toast.error("Error sending message!!");
      } finally {
        setLoading(false);
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
            required
            className="border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          <input
            type="text"
            name="lastName"
            required
            id="lastName"
            className="border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          <input
            type="email"
            name="email"
            id="email"
            required
            className="border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <input
            type="text"
            name="phone"
            required
            id="phone"
            className="border-b border-gray-700 p-2 w-fit outline-none"
            placeholder="Phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
          <textarea
            rows={4}
            cols={4}
            id="message"
            name="message"
            required
            placeholder="Message"
            className="border-b border-gray-400 p-2 outline-none"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.errors.message ? <div>{formik.errors.message}</div> : null}
          <CustormButton
            context={loading ? <Loading /> : "SUBMIT"}
            custom_style={` ${
              loading ? "bg-none" : "hover:bg-black"
            } border border-gray-700 w-fit mx-auto mt-3 px-6  hover:text-white`}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
