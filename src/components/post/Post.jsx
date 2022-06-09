import {AiOutlineHeart} from "react-icons/ai";
import {
  FaRegComment,
  FaRegShareSquare,
  FaRegFlag,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
const Post = () => {
  return (
    <>
      <div className="bg-white flex flex-col py-5 rounded gap-[5px] mb-6">
        <div className="heading-avatar flex items-center mx-5">
          <button className="avatar">
            <div className="w-9 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </button>
          <div className="box-left flex flex-col ml-2 ">
            <a className="user-name text-black font-semibold ">John Wick</a>
            <span className="text-grayText text-xs font-semibold">30m ago</span>
          </div>
        </div>
        <div className="tile-post mx-5">
          <span className="text-black text-sm">
            This was one of the most epic journeys, that i've got myself
            involved in. Maybe one of the most memorizable in my entire life!
          </span>
        </div>
        <div className="image-post flex justify-center items-center gap-1 bg-black ">
          <button className="pre-image bg-white/50 w-7 h-7 rounded-full flex justify-center items-center hover:cursor-pointer ">
            <FaChevronLeft />
          </button>
          <img
            src="https://images.unsplash.com/photo-1605791141812-35237abf684e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
            alt="image"
            className="max-w-[448px] max-h-[560px] rounded"
          />
          <button className="next-image bg-white/50 w-7 h-7 rounded-full flex justify-center items-center hover:cursor-pointer  ">
            <FaChevronRight />
          </button>
        </div>

        <div className="pagnation-post flex gap-1 justify-center">
          <div className="rounded-full w-[8px] h-[8px] bg-primaryblue"></div>
          <div className="rounded-full w-[8px] h-[8px] bg-grayText"></div>
          <div className="rounded-full w-[8px] h-[8px] bg-grayText"></div>
          <div className="rounded-full w-[8px] h-[8px] bg-grayText"></div>
        </div>

        <div className="react-post flex justify-between text-2xl mx-5">
          <div className="left flex gap-2 w-fit ">
            <button className="like-post">
              <AiOutlineHeart />
            </button>
            <button className="like-post">
              <FaRegComment />
            </button>
            <button className="like-post">
              <FaRegShareSquare />
            </button>
          </div>
          <div className="right ">
            <button className="like-post">
              <FaRegFlag />
            </button>
          </div>
        </div>
        <div className="count-react mx-5">
          <span className="font-bold text-[13px]">1,000 Likes</span>
        </div>

        <div className="cmt-post flex gap-2 mx-5">
          <button class="avatar">
            <div class="w-9 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </button>
          <div className="main-cmt-post">
            <div className="cmt-box bg-grayLight rounded px-2 py-1">
              <div className="heading-cmt">
                <span className="text-[13px] font-semibold">Nguoi La</span>
              </div>
              <div className="content-cmt text-[13px] ">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Totam numquam porro, odit assumenda provident ratione
                  excepturi autem nam aperiam perferendis sequi officiis
                  voluptates, iure a eaque nesciunt voluptatum ut rem.
                </p>
              </div>
            </div>
            <div className="info-cmt-post text-xs ">
              <button className="font-semibold mx-2 hover:underline">
                Like
              </button>
              <button className="font-semibold mr-2 hover:underline">
                Reply
              </button>
              <span>1m</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
