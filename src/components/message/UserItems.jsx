import avatarDefault from "../../Resource/Image/avatar.png";

const UserItems = ({
  dataConversation,
  setReceiverID,
  handleResetConversation,
  setGuestName,
  setAvatarGuest,
}) => {
  const handleLoadConversation = () => {
    handleResetConversation();
    setAvatarGuest(dataConversation.avatar);
    setGuestName(dataConversation.lastName + " " + dataConversation.firstName);
    setReceiverID(dataConversation.id);
  };
  return (
    <>
      {dataConversation !== undefined ? (
        <div
          onClick={handleLoadConversation}
          className="user-items focus:bg-grayLight cursor-pointer flex items-center hover:bg-grayLight rounded px-4 py-2"
        >
          <button className="avatar">
            <div className="w-12 rounded-full">
              <img
                src={
                  dataConversation.avatar != null
                    ? dataConversation.avatar
                    : avatarDefault
                }
              />
            </div>
          </button>
          <div className="box-left flex flex-col ml-2">
            <a className="user-name text-black font-semibold ">
              {dataConversation.lastName + " " + dataConversation.firstName}
            </a>
            <span className="text-grayText text-xs font-semibold">
              {dataConversation.email}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserItems;
