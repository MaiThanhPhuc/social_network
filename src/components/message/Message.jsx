import {BiMessageRoundedAdd, BiSearch, BiCamera, BiHappy} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";
import {RiSubtractLine, RiCloseLine} from "react-icons/ri";
import {IoSend} from "react-icons/io5";
const Message = () => {
  return (
    <>
      <div className="bg-white w-messageWidth h-messHeight fixed z-20 bottom-0 right-0 rounded-lg shadow-lg border border-black/10 grid grid-cols-8 mr-12">
        <div className="col-span-3 border-r border-black/10 ">
          <div className="heading-message px-3 pt-3 flex flex-col gap-2 mb-2">
            <div className="heading flex items-center justify-between ">
              <h1 className="font-semibold text-xl">Message</h1>
              <div className="new-chat text-2xl text-primaryblue">
                <BiMessageRoundedAdd />
              </div>
            </div>
            <div className="search-message flex bg-grayLight rounded px-1 py-1 ">
              <div className="flex items-center justify-center">
                <BiSearch color="#878A8C" />
              </div>
              <input
                className=" outline-none text-[13px] bg-grayLight pl-1 text-bodytxt py-[2px] w-full"
                type="text"
                placeholder="Search messenger"
              ></input>
            </div>
          </div>

          <div className="list-user rounded">
            <div className="user-items flex items-center hover:bg-grayLight rounded px-4 py-2">
              <button class="avatar">
                <div class="w-9 rounded-full">
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
                <div class="w-9 rounded-full">
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
        <div className="col-span-5">
          <div className="heading-main-chat flex justify-between border-b border-black/10 px-3 py-2">
            <div className="guest-name">
              <h1 className="font-semibold text-lg">John Wick</h1>
            </div>
            <div className="group-btn-left flex text-2xl gap-1 items-center text-black/60">
              <button className="btn-setting text-lg">
                <FiSettings />
              </button>
              <button className="btn-hide">
                <RiSubtractLine />
              </button>
              <button className="btn-exit ">
                <RiCloseLine />
              </button>
            </div>
          </div>
          <div className="chat-input flex w-full items-center gap-2">
            <div className="btn-photo-sticker flex text-xl ">
              <div className="photo-btn rounded-full p-1 hover:bg-grayLight ">
                <BiCamera />
              </div>
              <div className="ticker-btn rounded-full p-1 hover:bg-grayLight">
                <BiHappy />
              </div>
            </div>
            <div className="message-input w-full">
              <textarea
                placeholder="Message"
                role="textbox"
                className="w-full rounded text-[13px] resize-none p-2 bg-grayLight"
              ></textarea>
            </div>
            <button className="btn-send text-xl text-primaryblue p-1">
              <IoSend />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
