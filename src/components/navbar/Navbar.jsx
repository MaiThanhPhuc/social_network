import {useEffect, useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import {AiFillStar, AiOutlineMessage} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import {FiPlusSquare} from "react-icons/fi";
import {IoNotificationsOutline} from "react-icons/io5";
import logo from "../../Resource/Image/logo.png";
const Navbar = () => {
  const [noti, setNoti] = useState(false);
  const [mess, setMess] = useState(true);

  return (
    <>
      <nav className="flex items-center py-1 px-12 justify-evenly bg-white fixed w-full top-0 z-20 border-b border-black/20 ">
        <Link to="/" className="wrapper-right flex items-center cursor-pointer">
          <img src={logo} alt="Logo" className="w-[45px] h-[45px]" />
          <div className="text-black text-lg">mangxahoi</div>
        </Link>
        <form className="relative bg-grayLight wrapper-middle outline outline-[#000]/20 outline-1 h-8 w-[450px] flex hover:outline-primaryblue focus-within:outline-primaryblue rounded ">
          <div className="pl-4 pr-3 flex justify-center items-center ">
            <BiSearch color="#878A8C" size={25} />
          </div>
          <input
            className="pl-2 w-full outline-none text-[14px] bg-grayLight text-bodytxt focus:bg-white "
            type="text"
            placeholder="Search name social"
          ></input>
          {/* Suggest table */}
          <div className=" hidden absolute shadow bg-gray z-40 w-full lef-0 rounded h-[100px] overflow-y-auto top-10 outline outline-[#000]/20 outline-1  ">
            <div className=" flex flex-col w-full">
              <div className="template">
                <div className="flex w-full bg-white border-b-[1px] border-gray border-indigo-500 p-1">
                  <div className="w-14 flex flex-col">
                    <div className="flex items-center">
                      <div className="rounded-full bg-gray w-7 h-7 m-2">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="">
                      <span className="font-semibold text-base">test name</span>
                      <div className="text-xs text-bodytxt pb-1">
                        test@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End suggest */}
        </form>

        <div className="wrapper-left flex justify-between w-[200px] items-center">
          <div className="flex items-end justify-end">
            <Link
              to="/newpost"
              className="btn btn-sm btn-primary text-white gap-1 text-xs"
            >
              <FiPlusSquare size={18} /> Create
            </Link>
          </div>
          <button
            onClick={() => {
              setNoti(false);
            }}
            className="indicator"
          >
            <span
              className={
                noti &&
                "right-2 top-[5px] indicator-item badge badge-accent badge-xs"
              }
            ></span>
            <IoNotificationsOutline size={25} />
          </button>
          <button
            onClick={() => {
              setMess(false);
            }}
            className="indicator"
          >
            <span
              className={
                mess &&
                "right-2 top-[5px] indicator-item badge badge-accent badge-xs"
              }
            ></span>
            <AiOutlineMessage size={25} />
          </button>
          <Link to="/user" className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
