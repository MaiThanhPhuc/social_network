import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const Recovery = () => {
  return (
    <>
      <div className=" h-heightRecoveryPass bg-[#fafafb] rounded-xl flex flex-col justify-around items-center">
        <h1 className="text-black font-roboto font-semibold text-2xl mt-8 w-inputRecoveryPassWidth">
          Password Recovery
        </h1>
        <div className="w-inputRecoveryPassWidth sub-heading text-xs text-grayText">
          <span>Enter your email to recover your password</span>
        </div>

        <div className="w-inputRecoveryPassWidth email-box flex flex-col">
          <label className="text-xs font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="emailrecovery"
            placeholder="Enter Your Email"
            className="text-sm w-inputRecoveryPassWidth px-3 py-10 rounded bg-inputColor outline-none font-roboto"
          />
        </div>

        <div className="w-inputRecoveryPassWidth flex justify-center items-center mt-5">
          <button className="text-white btn btn-primary btn-block btn-sm h-9 text-sm normal-case mb-4">
            Send Code
          </button>
        </div>
      </div>
    </>
  );
};

export default Recovery;
