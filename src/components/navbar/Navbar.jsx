import {AiFillStar} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center py-4 pl-4 justify-evenly bg-white fixed w-full top-0 ">
        <a className="wrapper-right flex items-center cursor-pointer">
          <AiFillStar className="text-red-700" />
          <div className="text-lg">Social Network</div>
        </a>
        <form className="relative bg-white wrapper-middle outline outline-[#000]/20 outline-1 h-8 w-[450px] flex hover:outline-primaryblue focus-within:outline-primaryblue">
          <div className="pl-4 pr-3 flex justify-center items-center ">
            <BiSearch color="#878A8C" size={25} />
          </div>
          <input
            className="w-full outline-none text-[14px] text-bodytxt "
            type="text"
            placeholder="Search name social"
          ></input>
          {/* Suggest table */}
          <div className=" hidden absolute shadow bg-gray z-40 w-full lef-0 rounded h-[100px] overflow-y-auto top-10 outline outline-[#000]/20 outline-1  ">
            <div className=" flex flex-col w-full">
              <div className="template">
                <div className="flex w-full bg-white border-b-[1px] border-gray  border-indigo-500 p-1">
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

        <div className="wrapper-left flex ">
          <div className="flex justify-center items-center outline outline-1 outline-primaryblue h-8 w-24 rounded-[15px] cursor-pointer">
            <a className="text-primaryblue text-[12px] font-bold">Log In</a>
          </div>
          <div className="ml-3 flex justify-center items-center h-8 w-24 rounded-[15px] bg-primaryblue cursor-pointer">
            <a className="text-white text-[12px] font-bold">Sign Up</a>
          </div>
        </div>
      </nav>
      <div></div>
    </>
  );
};

export default Navbar;
