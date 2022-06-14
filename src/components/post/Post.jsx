import {useState} from "react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {FaRegComment, FaRegShareSquare, FaRegFlag} from "react-icons/fa";
import Carousel from "./Carousel";
import CommentBox from "./CommentBox";
import CommentLoad from "./CommentLoad";
import Report from "./Report";
import Share from "./Share";

const Post = (postID, userImage, userName, time, postImages, postDes) => {
  const [like, setLike] = useState(110);
  const [isLike, setIsLike] = useState(false);
  const [showCmt, setShowCmt] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  // ////////////////////
  userName = "as";
  time = 1;
  postDes = "123";
  userImage = "https://api.lorem.space/image/face?hash=92310";
  // //////////////////

  const handleLike = () => {
    if (isLike) {
      setIsLike(false);
      if (like !== 0) {
        setLike(like - 1);
      }
    } else {
      setIsLike(true);
      setLike(like + 1);
    }
  };

  return (
    <>
      <div className="bg-white flex flex-col py-2 rounded gap-[4px] mb-6 ">
        <div className="top-post mx-4">
          <div className="heading-avatar flex items-center">
            <button className="avatar">
              <div className="w-9 rounded-full">
                <img src={userImage} alt={userName} />
              </div>
            </button>
            <div className="box-left flex flex-col ml-2 ">
              <a
                href="/"
                className="user-name text-black font-semibold cursor-pointer"
              >
                {userName}
              </a>
              <span className="text-grayText text-xs font-semibold">
                {time} minutes ago
              </span>
            </div>
          </div>
          <div className="tile-post ">
            <span className="text-black text-sm">{postDes}</span>
          </div>
        </div>
        <div className="post-image flex justify-center rounded ">
          <Carousel key={postID} />
        </div>
        <div className="bottom-post mx-4">
          <div className="react-post flex justify-between text-2xl ">
            <div className="left flex gap-2 w-fit ">
              <button onClick={handleLike} className="like-post">
                <AiOutlineHeart className={isLike && "hidden"} />
                <AiFillHeart
                  style={{color: "red"}}
                  className={!isLike && "hidden"}
                />
              </button>
              <button
                className="cmt-post"
                onClick={() => {
                  setShowCmt(true);
                }}
              >
                <FaRegComment className="hover:text-black/50" />
              </button>
              <button
                onClick={() => setShowShareModal(true)}
                className="share-post"
              >
                <FaRegShareSquare className="hover:text-black/50" />
              </button>
              {showShareModal ? (
                <Share setShowShareModal={setShowShareModal} />
              ) : null}
            </div>
            <div className="right ">
              <button
                onClick={() => setShowReport(true)}
                className="report-post"
              >
                <FaRegFlag className="hover:text-black/50" />
              </button>
              {showReport ? <Report setShowReport={setShowReport} /> : null}
            </div>
          </div>
          <div className="count-react">
            <span className="font-bold text-[13px]"> {like} Likes</span>
          </div>
          <CommentLoad />
          {showCmt ? <CommentBox /> : null}
        </div>
      </div>
    </>
  );
};

export default Post;
