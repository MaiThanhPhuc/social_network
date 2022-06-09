import {useRef, useState, useEffect, useContext} from "react";
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
import {AiOutlineGoogle} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import Recovery from "../recovery/Recovery";
import Signup from "../signup/Signup";
import Storage from "../../Services/Storage ";
const Signin = () => {
  const user = Storage.GetItem("user");

  const formik = useFormik({
    initialValues: {
      emailSi: "",
      passwordSi: "",
    },
    validationSchema: Yup.object({
      emailSi: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      passwordSi: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password must be minimum 8 character and  contain at least one letter, one number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:8080/api/login", {
          email: values.emailSi,
          password: values.passwordSi,
        })
        .then((result) => {
          console.log(result.data);
          Storage.SetItem("user", result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <div className=" w-[450px] drop-shadow-2xl ">
            <div className="h-signinHeight bg-[#fafafb] rounded-xl flex flex-col justify-around items-center mt- ">
              <h1 className="text-black font-roboto font-semibold text-2xl mb-5 mt-8">
                Welcome Back!
              </h1>
              <div className="top-gg-fb flex justify-between w-iW ">
                <button className="text-white btn btn-primary btn-sm font-semibold px-6 text-sm normal-case">
                  <AiOutlineGoogle className=" mr-1" /> Sign in with Google
                </button>
                <button className=" text-white btn btn-neutral btn-sm font-semibold px-4 text-sm normal-case">
                  <FaFacebookF className="mr-1" />
                  Facebook
                </button>
              </div>
              <div className=" flex items-center">
                <div className=" border-grayLight w-[60px] border-b"></div>
                <span className="mx-2 text-grayText text-[10px]">
                  or continue with
                </span>
                <div className="border-grayLight w-[60px] border-b"></div>
              </div>

              <div className="email-box flex flex-col">
                <label className="text-xs font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.emailSi}
                  // required

                  name="emailSi"
                  id="emailSi"
                  placeholder="Enter Your Email"
                  className="text-sm w-iW px-3 py-10 rounded bg-inputColor outline-none font-roboto text-black/90"
                />
                {formik.errors.emailSi && (
                  <p className="errorMsg text-[10px] text-red w-iW">
                    {formik.errors.emailSi}
                  </p>
                )}
              </div>
              <div className="password-box flex flex-col">
                <label className="text-xs font-medium" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.passwordSi}
                  // required
                  type="password"
                  name="passwordSi"
                  id="passwordSi"
                  placeholder="Enter Your Password"
                  className="text-sm w-iW px-3 py-10 rounded bg-inputColor outline-none font-roboto text-black/90"
                />
                {formik.errors.passwordSi && (
                  <p className="errorMsg text-[10px] text-red w-iW">
                    {formik.errors.passwordSi}
                  </p>
                )}
              </div>

              <div className="forgotpass-box w-iW flex justify-end text-sm text-primaryblue font-semibold">
                <label
                  htmlFor="my-modal-resetpass"
                  href="/#"
                  className="cursor-pointer"
                >
                  Forgot Your Password?
                </label>
              </div>
              <div className="w-iW flex justify-center items-center mt-5">
                <button
                  type="submit"
                  className="text-white btn btn-primary btn-block btn-sm h-9 normal-case"
                >
                  Sign In
                </button>
              </div>

              <div className="signup-box w-iW flex justify-center text-sm mb-5">
                <span className="">
                  Don't have an account?{" "}
                  <label
                    htmlFor="my-modal-signup"
                    className="text-primaryblue font-semibold cursor-pointer hover:underline"
                    href="/#"
                  >
                    Sign Up
                  </label>
                </span>
              </div>
            </div>
          </div>
        </form>

        {/* sign up modal */}
        <input type="checkbox" id="my-modal-signup" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box relative bg-[#fafafb]  max-w-[28rem] ">
            <label
              htmlFor="my-modal-signup"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <Signup />
          </div>
        </div>

        {/* recovery modal */}
        <input
          type="checkbox"
          id="my-modal-resetpass"
          className="modal-toggle"
        />
        <div className="modal ">
          <div className="modal-box relative bg-[#fafafb] max-w-[25rem]">
            <label
              htmlFor="my-modal-resetpass"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <Recovery />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
