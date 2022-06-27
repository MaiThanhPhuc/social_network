import {useState} from "react";
import avatarDefault from "../../Resource/Image/avatar.png";
import {MdOutlineReportProblem} from "react-icons/md";
import userService from "../../Services/user.service";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileGuest = ({stompClient, userData}) => {
  const [follow, setFollow] = useState(userData.follow);
  const temp = JSON.parse(localStorage.getItem("user"));
  const Id = temp.userId;
  const handleFollow = () => {
    setFollow(follow ? false : true);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${temp.access_token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://localhost:8080/api/user/follow?userId=${Id}&userFollowedId=${userData.id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const payload = JSON.parse(result);
        console.log(payload);
        stompClient.send(
          `/app/sendNotification`,
          {},
          JSON.stringify(payload.data)
        );
      })
      .catch((error) => console.log("error", error));
  };

  const handleReportUser = () => {
    userService
      .reportUser(userData.id)
      .then((res) => {
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
            <div className="w-UserAvatar rounded-full hover:cursor-pointer">
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
              {userData.firstName + " " + userData.lastName}
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
