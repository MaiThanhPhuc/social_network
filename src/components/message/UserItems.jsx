const UserItems = ({setReceiverID}) => {
  return (
    <>
      <div
        onClick={(e) => setReceiverID(1)}
        className="user-items cursor-pointer flex items-center hover:bg-grayLight rounded px-4 py-2"
      >
        <button className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=92310" />
          </div>
        </button>
        <div className="box-left flex flex-col ml-2">
          <a className="user-name text-black font-semibold ">John Wick</a>
          <span className="text-grayText text-xs font-semibold">30m ago</span>
        </div>
      </div>
    </>
  );
};

export default UserItems;
