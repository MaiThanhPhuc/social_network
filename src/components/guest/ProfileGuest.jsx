import {useState, useEffect} from "react";
import {AiOutlineEdit} from "react-icons/ai";
import {Link} from "react-router-dom";
import avatarDefault from "../../Resource/Image/avatar.png";
import {MdOutlineReportProblem} from "react-icons/md";
import userService from "../../Services/user.service";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileGuest = ({userData}) => {
  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(follow ? false : true);
  };

  const handleReportUser = () => {
    userService
      .reportUser(userData.id)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success(
            "Your feedback is important in helping us keep the us community safe",
            {
              position: "bottom-center",
              autoClose: 3000,
              theme: "dark",
            }
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-white mb-4 flex flex-col items-center rounded py-8 gap-6">
        <div className="heading-profile flex flex-col justify-center items-center gap-3 ">
          <div className="avatar ">
            <div class="w-UserAvatar rounded-full hover:cursor-pointer">
              <img
                src={
                  userData.imageUrl !== null ? userData.imageUrl : avatarDefault
                }
                className="hover:bg-white"
              />
            </div>
          </div>
          <div className="name-user">
            <h1 className="font-bold text-black text-xl">
              {localStorage.getItem("userName")}
            </h1>
          </div>
        </div>
        <div className="border border-b w-5/6 border-grayLight"></div>
        <div className="info-user flex flex-col justify-center items-center w-5/6 gap-2">
          <div className="from-box flex justify-between w-full">
            <h3 className="label-info font-semibold text-sm">Email</h3>
            <span className="content-info text-grayText font-medium text-sm">
              {userData.email}
            </span>
          </div>
          <div className="from-box flex justify-between w-full">
            <h3 className="label-info font-semibold text-sm">Address</h3>
            <span className="content-info text-grayText font-medium text-sm">
              {userData.address}
            </span>
          </div>
          <div className="bio-box flex justify-between w-full">
            <h3 className="label-info font-semibold text-sm">Gender</h3>
            <span className="content-info text-grayText font-medium text-sm w-2/3 text-right">
              {userData.gender == 0 ? "Male" : "Female"}
            </span>
          </div>
          <div className="bio-box flex justify-between w-full">
            <h3 className="label-info font-semibold text-sm">Date of birth</h3>
            <span className="content-info text-grayText font-medium text-sm w-2/3 text-right">
              {userData.birthDay}
            </span>
          </div>
          <div className="bio-box flex justify-between w-full">
            <h3 className="label-info font-semibold text-sm">Bio</h3>
            <span className="content-info text-grayText font-medium text-sm w-2/3 text-right">
              {userData.bio}
            </span>
          </div>
        </div>
        <div className=" w-5/6 flex justify-evenly  ">
          {follow ? (
            <button
              onClick={handleFollow}
              className=" w-2/5 outline outline-1 hover:bg-black/10 rounded px-2 py-[6px] text-[13px] font-semibold text-black "
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={handleFollow}
              className=" w-2/5 bg-primaryblue hover:bg-primaryblue/80  rounded px-2 py-[6px] text-[13px] font-semibold text-white "
            >
              Follow
            </button>
          )}
          <button className=" w-2/5 bg-primaryblue hover:bg-primaryblue/80  rounded px-2 py-[6px] text-[13px] font-semibold text-white">
            Chat
          </button>
          <button
            onClick={() => handleReportUser()}
            className="hover:bg-primaryblue/8 rounded-full text-[13px] font-semibold text-black"
          >
            <MdOutlineReportProblem size={22} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileGuest;
