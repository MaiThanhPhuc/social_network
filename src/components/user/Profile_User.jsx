import {AiOutlineEdit} from "react-icons/ai";
import {Link} from "react-router-dom";
const Profile_User = () => {
  return (
    <>
      <div className="bg-white mb-4 flex flex-col items-center rounded py-8 gap-6">
        <div className="heading-profile flex flex-col justify-center items-center gap-3 ">
          <div className="avatar ">
            <div class="w-UserAvatar rounded-full hover:cursor-pointer">
              <img
                src="https://api.lorem.space/image/face?hash=92310 "
                className="hover:bg-white"
              />
            </div>
          </div>
          <div className="name-user">
            <h1 className="font-bold text-black text-xl">Jack Sparrow</h1>
          </div>
        </div>
        <div className="border border-b w-5/6 border-grayLight"></div>
        <div className="info-user flex flex-col justify-center items-center w-5/6 gap-2">
          <div className="from-box flex justify-between w-full">
            <h3 className="label-info font-semibold text-sm">Hometown</h3>
            <span className="content-info text-grayText font-medium text-sm">
              Viet Nam
            </span>
          </div>
          <div className="bio-box flex justify-between w-full">
            <h3 className="label-info font-semibold text-sm">Bio</h3>
            <span className="content-info text-grayText font-medium text-sm w-2/3 text-right">
              Nice men Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus placeat neque iure dignissimos enim
            </span>
          </div>
          <div className="age-box flex justify-between w-full ">
            <h3 className="label-info font-semibold text-sm">Age</h3>
            <span className="content-info text-grayText font-medium text-sm w-2/3 text-right">
              23
            </span>
          </div>
          <div className="hobby-box flex justify-between w-full">
            <h3 className="label-info font-semibold text-sm">Hobby</h3>
            <span className="content-info text-grayText font-medium text-sm w-2/3 text-right">
              music
            </span>
          </div>
        </div>
        <Link
          to="/accounts"
          className="btn btn-primary btn-sm normal-case text-[13px] text-white w-5/6"
        >
          Edit profile
          <AiOutlineEdit className="ml-1 text-lg" />
        </Link>
      </div>
    </>
  );
};

export default Profile_User;
