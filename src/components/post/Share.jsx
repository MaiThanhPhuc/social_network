import {useState} from "react";

const Share = ({setShowShareModal}) => {
  const [check, setCheck] = useState(false);
  const [inputUser, setInputUser] = useState(["123213", "12321", "adwdawd "]);
  const handleInputChange = (e) => {};
  return (
    <>
      <div class="modal visible opacity-100 pointer-events-auto">
        <div class="modal-box w-shareWidth max-w-5xl relative p-0">
          <button
            onClick={() => setShowShareModal(false)}
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 class="text-xl font-bold text-center pt-4 ">Share</h3>
          <div className=" mt-4">
            <div className="search-box flex justify-center border-y border-black/10 py-4 px-4">
              <label htmlFor="searchShare" className="text-lg font-semibold">
                To:
              </label>
              <input
                id="searchShare"
                name="searchShare"
                type="text"
                className="ml-6 text-lg w-full px-2 outline-none"
              />
            </div>
            <h3 className="text-base font-semibold py-4 px-4 ">Suggested</h3>
            <ul className="listUser overflow-y-scroll max-h-80 pb-4 ">
              <li>
                <button
                  onClick={() => (check ? setCheck(false) : setCheck(true))}
                  className="flex items-center justify-between w-full hover:bg-black/10 p-2 "
                >
                  <div className="avatar-name flex items-center gap-2 pl-2">
                    <div class="avatar">
                      <div class="w-11 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=92310" />
                      </div>
                    </div>
                    <h2 className="username text-base font-semibold">Ten</h2>
                  </div>
                  <input
                    id="checkeduser"
                    type="checkbox"
                    checked={check}
                    class="checkbox outline-none checkbox-xs p-2 checkbox-primary"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
