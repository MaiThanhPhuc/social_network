import {Link} from "react-router-dom";
import avatarDefault from "../../Resource/Image/avatar.png";

const Account = ({data}) => {
  return (
    <>
      <Link to={`/user/${data.id}`} className="template cursor-pointer ">
        <div className="flex w-full bg-white border-b-[1px] border-gray border-indigo-500 p-1 hover:bg-black/10">
          <div className="w-14 flex flex-col">
            <div className="flex items-center">
              <button className="avatar">
                <div className="w-8 rounded-full m-2">
                  <img
                    src={data.imageUrl !== null ? data.imageUrl : avatarDefault}
                    alt="avatar"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="">
              <span className="font-semibold text-base"></span>
              <div className=" text-sm text-bodytxt pb-1">
                {data.lastName + " " + data.firstName}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Account;
