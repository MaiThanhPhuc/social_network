const Change_Password = () => {
  return (
    <>
      <div className="bg-white rounded">
        <div className="flex flex-col gap-6 py-8">
          <div className="avatar-change flex items-center ">
            <button class="avatar w-1/4 flex justify-end">
              <div class="w-9 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </button>
            <div className="user-name-change-avatar ml-8">
              <h2 className="font-semibold text-lg leading-[20px]">
                John Wick
              </h2>
            </div>
          </div>
          <div className="items-edit-user-currentPass flex ">
            <label
              htmlFor="currentPass"
              className="font-semibold text-right w-1/4"
            >
              Current
            </label>
            <input
              type="password"
              className="pl-2 py-1 border border-black/20 rounded w-2/4 ml-8"
              name="currentPass"
            />
          </div>
          <div className="items-edit-user-newPassword flex ">
            <label
              htmlFor="newPassword"
              className="font-semibold text-right w-1/4"
            >
              New
            </label>
            <input
              type="password"
              className="pl-2 py-1 border border-black/20 rounded w-2/4 ml-8"
              name="newPassword"
            />
          </div>

          <div className="items-edit-user-confirmPass flex ">
            <label
              htmlFor="confirmPass"
              className="font-semibold text-right w-1/4"
            >
              Re-type new
            </label>
            <input
              type="password"
              className="pl-2 py-1 border border-black/20 rounded w-2/4 ml-8"
              name="confirmPass"
            />
          </div>
          <div className="btn-edit-user flex">
            <div className="w-1/4 mr-8"></div>
            <button className="px-6 btn text-right btn-sm btn-primary normal-case text-white">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Change_Password;
