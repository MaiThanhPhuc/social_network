import {Routes, Route, Link} from "react-router-dom";
import Change_Password from "../../components/change_password/Change_Password";
import Edit_Profile from "../../components/edit_profile/Edit_Profile";

const EditProfile = () => {
  return (
    <>
      <div className=" grid grid-cols-10 gap-4 h-screen">
        <div className="col-span-2"></div>
        <div className="col-span-6">
          <div className="bg-white rounded">
            <div className="grid grid-cols-8 ">
              <div className="menu-edit-user col-span-2 border-r border-black/20 ">
                <ul className=" space-y-4 w-full">
                  <li>
                    <Link
                      to="edit"
                      className="pl-7 py-4 block hover:bg-grayLight/50 focus:font-semibold hover:border-black/20 active:border-black border-l-2 border-transparent  "
                    >
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="changepassword"
                      className="pl-7 py-4 block hover:bg-grayLight/50 focus:font-semibold hover:border-black/20 active:border-black border-l-2 border-transparent  "
                    >
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <a
                      href=""
                      className="pl-7 py-4 block hover:bg-grayLight/50 focus:font-semibold hover:border-black/20 active:border-black border-l-2 border-transparent  "
                    >
                      Friend
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="pl-7 py-4 block hover:bg-grayLight/50 focus:font-semibold hover:border-black/20 active:border-black border-l-2 border-transparent  "
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-6 flex flex-col gap-6">
                <Routes>
                  <Route index element={<Edit_Profile />} />
                  <Route path="edit" element={<Edit_Profile />} />
                  <Route path="changepassword" element={<Change_Password />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
