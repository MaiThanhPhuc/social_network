import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const Verify_Email = () => {
  return (
    <>
      <div className="relative w-fW2 ">
        <div className="absolute right-0 top-0">
          <AiOutlineClose />
        </div>
        <div className="w-fW2 h-[300px] bg-[#fafafb] rounded-xl flex flex-col justify-around items-center mt- ">
          <h1 className="text-black font-roboto font-semibold text-2xl mt-5 w-iW2">
            Email Verification
          </h1>
          <div className="w-iW2 sub-heading text-xs text-grayText">
            <span>We have send code to your Email demo@gmail.com</span>
          </div>

          <div className="w-iW2 flex justify-around ">
            <div className="number-box rounded bg-grayLight flex justify-center items-center">
              <input
                maxlength="1"
                type="text"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className=" input-number h-11 w-8 border font-semibold border-grayText/30 outline-primaryblue text-sm text-center"
              />
            </div>
            <div className="number-box rounded bg-grayLight flex justify-center items-center">
              <input
                maxlength="1"
                type="text"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className=" input-number h-11 w-8 border font-semibold border-grayText/30 outline-primaryblue text-sm text-center"
              />
            </div>
            <div className="number-box rounded bg-grayLight flex justify-center items-center">
              <input
                maxlength="1"
                type="text"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className=" input-number h-11 w-8 border font-semibold border-grayText/30 outline-primaryblue text-sm text-center"
              />
            </div>
            <div className="number-box rounded bg-grayLight flex justify-center items-center">
              <input
                maxlength="1"
                type="text"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className=" input-number h-11 w-8 border font-semibold border-grayText/30 outline-primaryblue text-sm text-center"
              />
            </div>
          </div>
          <div className="w-iW2 flex justify-center items-center mt-5">
            <button className="text-white btn btn-primary btn-block btn-sm h-9 text-[13px] normal-case">
              Verify Account
            </button>
          </div>
          <div className="resend-box w-iW2 flex justify-center text-[13px] mb-5">
            <span className="">
              Don’t receive code?{" "}
              <a className="text-primaryblue font-semibold" href="/#">
                Resend
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify_Email;
