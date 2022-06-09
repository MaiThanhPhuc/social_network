import Footer from "../../components/footer/Footer";
import Post from "../../components/post/Post";
import {HiOutlinePhotograph} from "react-icons/hi";
import {Link} from "react-router-dom";
const TimeLine = () => {
  return (
    <>
      <div className="flex gap-4 justify-center h-full">
        <div className="w-postWidth">
          <div className="newpost-btn bg-white flex p-3 gap-2 mb-3 rounded">
            <button className="avatar">
              <div className="w-9 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=92310"
                  alt="Avatar"
                />
              </div>
            </button>
            <Link
              to="/newpost"
              className="newpost-box text-left outline outline-1 outline-grayLight w-full pt-2 rounded bg-grayLight pl-3 text-sm text-bodytxt/50 font-semibold hover:cursor-text hover:outline-primaryblue hover:bg-white"
            >
              Create Post
            </Link>
            <Link
              to="/newpost"
              className="text-2xl text-bodytxt/70 px-2 hover:bg-grayLight rounded flex justify-center items-center"
            >
              <HiOutlinePhotograph />
            </Link>
          </div>
          <Post />
          <Post />
        </div>
        <div className="w-footerWidth ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TimeLine;
