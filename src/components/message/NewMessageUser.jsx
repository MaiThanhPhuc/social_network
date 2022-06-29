import avatarDefault from "../../Resource/Image/avatar.png";

const NewMessageUser = ({
  userData,
  setReceiverID,
  handleResetConversation,
  setGuestName,
  setAvatarGuest,
}) => {
  const handleLoadConversation = () => {
    handleResetConversation();
    setAvatarGuest(userData.imageUrl);
    setGuestName(userData.lastName + " " + userData.firstName);
    setReceiverID(userData.id);
  };
  return (
    <>
      {userData !== undefined ? (
        <div
          onClick={handleLoadConversation}
          className="user-items cursor-pointer flex items-center hover:bg-grayLight rounded px-4 py-2"
        >
          <button className="avatar">
            <div className="w-12 rounded-full">
              <img
                src={
                  userData.imageUrl != null ? userData.imageUrl : avatarDefault
                }
              />
            </div>
          </button>
          <div className="box-left flex flex-col ml-2">
            <a className="user-name text-black font-semibold ">
              {userData.lastName + " " + userData.firstName}
            </a>
            <span className="text-grayText text-xs font-semibold">
              {userData.email}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewMessageUser;
