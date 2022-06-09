const Edit_Profile = () => {
  return (
    <>
      <div className="bg-white rounded ">
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
              <button className="font-semibold text-sm leading-3 text-primaryblue hover:cursor-pointer ">
                Change Profile Photo
              </button>
            </div>
          </div>
          <div className="items-edit-user-name flex ">
            <label
              htmlFor="username"
              className="font-semibold text-right w-1/4"
            >
              User Name
            </label>
            <input
              type="text"
              className="pl-2 py-1 border border-black/20 rounded w-2/4 ml-8"
              name="username"
            />
          </div>
          <div className="items-edit-user-from flex ">
            <label htmlFor="from" className="font-semibold text-right w-1/4">
              Hometown
            </label>
            <input
              type="text"
              className="pl-2 py-1 border border-black/20 rounded w-2/4 ml-8"
              name="from"
            />
          </div>
          <div className="items-edit-user-bio flex ">
            <label htmlFor="bio" className="font-semibold text-right w-1/4">
              Bio
            </label>
            <textarea
              maxlength="100"
              type="text"
              className="pl-2 py-1 border border-black/20 rounded w-2/4 ml-8 resize-none"
              name="bio"
            ></textarea>
          </div>
          <div className="items-edit-user-hobby flex ">
            <label htmlFor="hobby" className="font-semibold text-right w-1/4 ">
              Hobby
            </label>
            <textarea
              maxlength="100"
              type="text"
              className="pl-2 py-1 border border-black/20 rounded w-2/4 ml-8 resize-none"
              name="hobby"
            ></textarea>
          </div>
          <div className="items-edit-user-name flex ">
            <label
              htmlFor="username"
              className="font-semibold text-right w-1/4"
            >
              Age
            </label>
            <input
              type="text"
              className="pl-2 py-1 border border-black/20 rounded w-2/4 ml-8"
              name="username"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <div className="btn-edit-user flex">
            <div className="w-1/4 mr-8"></div>
            <button className="px-6 btn text-right btn-sm btn-primary normal-case text-white">
              Save Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit_Profile;
