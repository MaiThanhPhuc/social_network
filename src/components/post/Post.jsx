import {useEffect, useState} from "react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {FaRegComment, FaRegShareSquare, FaRegFlag} from "react-icons/fa";
import userService from "../../Services/user.service";
import Carousel from "./Carousel";
import CommentBox from "./CommentBox";
import CommentLoad from "./CommentLoad";
import Report from "./Report";
import Share from "./Share";
import avatarDefault from "../../Resource/Image/avatar.png";

const Post = ({postData}) => {
  const [like, setLike] = useState(postData.countLiked);
  const [isLike, setIsLike] = useState(postData.liked);
  const [showCmt, setShowCmt] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [sizeCmt, setSizeCmt] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [cmts, setCmts] = useState([]);
  const [load, setLoad] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const Id = user.userId;

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
    setLikeApi();
  };

  const fetchDataComment = async () => {
    await userService
      .getComment(postData.id, sizeCmt)
      .then((res) => {
        setCmts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (cmts.length !== 0) {
      setLoad(true);
    }
  }, [cmts]);

  const setLikeApi = async () => {
    await userService
      .likePost(Id, postData.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDataComment();
  }, []);

  return (
    <>
      <div className="bg-white flex flex-col py-2 rounded gap-[4px] mb-6 ">
        <div className="top-post mx-4">
          <div className="heading-avatar flex items-center">
            <button className="avatar">
              <div className="w-9 rounded-full">
                <img
                  src={
                    postData.userCreate.imageUrl !== null
                      ? postData.userCreate.imageUrl
                      : avatarDefault
                  }
                  alt={postData.userCreate.firstName}
                />
              </div>
            </button>
            <div className="box-left flex flex-col ml-2 ">
              <a
                href="/"
                className="user-name text-black font-semibold cursor-pointer"
              >
                {postData.userCreate.firstName}
              </a>
              <span className="text-grayText text-xs font-semibold">
                {postData.createTime} minutes ago
              </span>
            </div>
          </div>
          <div className="tile-post mt-4 ">
            <span className="text-black text-base">{postData.content}</span>
          </div>
        </div>
        <div className="post-image flex justify-center rounded ">
          <Carousel imageUrl={postData.urlImage} />
        </div>
        <div className="bottom-post mx-4 ">
          <div className="react-post flex justify-between text-2xl mt-2 ">
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
              {showReport ? (
                <Report postID={postData.id} setShowReport={setShowReport} />
              ) : null}
            </div>
          </div>

          <div className="count-react mb-2">
            <span className="font-bold text-[13px]"> {like} Likes</span>
          </div>

          {load
            ? cmts.map((cmt, index) => (
                <CommentLoad key={index} cmtData={cmt} />
              ))
            : null}
          {load ? (
            <div className="count-react mb-2">
              <button
                onClick={() => {
                  setSizeCmt(sizeCmt + 4);
                  fetchDataComment();
                }}
                className=" font-semibold text-sm hover:cursor-pointer hover:underline text-primaryblue"
              >
                View more comment
              </button>
            </div>
          ) : null}
          {showCmt ? <CommentBox userID={Id} postID={postData.id} /> : null}
        </div>
      </div>
    </>
  );
};

export default Post;
