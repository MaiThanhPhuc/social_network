import avatarDefault from "../../Resource/Image/avatar.png";

const Notification = ({data}) => {
  return (
    <>
      <div className="cursor-pointer ">
        <div className="flex w-full bg-white border-b-[1px] border-gray py-1 px-3 hover:bg-black/10">
          <div className="w-14 flex flex-col">
            <div className="flex items-center">
              <button className="avatar">
                <div className="w-8 rounded-full m-2">
                  <img
                    src={
                      data.userCreate.imageUrl !== null
                        ? data.userCreate.imageUrl
                        : avatarDefault
                    }
                    alt="avatar"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col ">
            <span className=" text-sm text-bodytxt">{data.content}</span>
            <span className=" text-sm text-bodytxt">{data.createTime}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;