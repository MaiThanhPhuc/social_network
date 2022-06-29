import Carousel from "./Carousel";
import {Link} from "react-router-dom";
import {format} from "timeago.js";

const PostShare = ({postData}) => {
  return (
    <>
      <div className="top-post w-postWidth mx-4 rounded pb-2 border border-black/20 ">
        <Carousel imageUrl={postData.postShared.imgUrl} />
        <div className="heading-avatar flex items-center mt-2">
          <div className="box-left flex flex-col ml-2 ">
            <Link
              to={`user/${postData.userCreateId}`}
              className="user-name text-black font-semibold cursor-pointer"
            >
              {postData.firstName + " " + postData.lastName}
            </Link>
            <span className="text-grayText text-xs font-semibold">
              {format(postData.postShared.updateTime)}
            </span>
          </div>
        </div>
        <div className="tile-post mt-4 ml-2">
          <span className="text-black text-base">
            {postData.postShared.content}
          </span>
        </div>
      </div>
    </>
  );
};

export default PostShare;
