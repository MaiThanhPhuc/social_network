import {BiMessageRoundedAdd, BiSearch, BiCamera, BiHappy} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";
import {RiSubtractLine, RiCloseLine} from "react-icons/ri";
import {BsInfoCircle} from "react-icons/bs";
import {IoSend} from "react-icons/io5";
import TextareaAutosize from "react-textarea-autosize";

const MessageBox = () => {
  return (
    <>
      <div className="bg-white w-messageWidth h-messHeight rounded-lg shadow-sm  border border-black/10 grid grid-cols-8 mr-12">
        <div className="col-span-3 border-r border-black/10 ">
          <div className="heading-message px-4 py-4 flex flex-col gap-2 mb-2">
            <div className="heading flex items-center justify-between font-semibold text-xl ">
              <h1>Message</h1>
              <div className="new-chat text-2xl text-primaryblue">
                <BiMessageRoundedAdd />
              </div>
            </div>
          </div>
          <div className=" border-b border-black/20"></div>
          <div className="list-user rounded">
            <div className="user-items flex items-center hover:bg-grayLight rounded px-4 py-2">
              <button class="avatar">
                <div class="w-12 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </button>
              <div className="box-left flex flex-col ml-2">
                <a className="user-name text-black font-semibold ">John Wick</a>
                <span className="text-grayText text-xs font-semibold">
                  30m ago
                </span>
              </div>
            </div>
            <div className="user-items flex items-center hover:bg-grayLight rounded px-4 py-2">
              <button class="avatar">
                <div class="w-12 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </button>
              <div className="box-left flex flex-col ml-2">
                <a className="user-name text-black font-semibold ">John Wick</a>
                <span className="text-grayText text-xs font-semibold">
                  30m ago
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 relative">
          <div className="heading-main-chat flex justify-between border-b border-black/20 px-6 py-5">
            <div className="guest-name">
              <h1 className="font-semibold text-lg">John Wick</h1>
            </div>
            <div className="group-btn-left flex text-2xl gap-1 items-center text-black/60">
              <button className="btn-setting text-lg">
                <BsInfoCircle size={25} color={"#000"} />
              </button>
            </div>
          </div>
          <div className="bg-black"></div>

          <div className="chat-input flex w-full items-center gap-2 px-4 absolute bottom-0 py-4 border-t border-black/20">
            <div className="btn-photo-sticker flex text-2xl ">
              <div className="photo-btn rounded-full p-1 hover:bg-grayLight ">
                <BiCamera />
              </div>
              <div className="ticker-btn rounded-full p-1 hover:bg-grayLight">
                <BiHappy />
              </div>
            </div>
            <TextareaAutosize
              maxRows={3}
              placeholder="Type something"
              className="w-full outline-none border border-black/30 rounded-xl resize-none text-sm py-1 px-2"
            />
            <button className="btn-send  text-xl hover:text-primaryblue/70 text-primaryblue p-1">
              <IoSend />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
