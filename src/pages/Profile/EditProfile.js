import {useEffect, useState} from "react";
import {Routes, Route, Link, Outlet} from "react-router-dom";
import Change_Password from "../../components/edit_profile/Change_Password";
import Edit_Profile from "../../components/edit_profile/Edit_Profile";
import Navbar from "../../components/navbar/Navbar";
import userService from "../../Services/user.service";
import avatarDefault from "../../Resource/Image/avatar.png";

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState();

  const temp = JSON.parse(localStorage.getItem("user"));
  const Id = temp.userId;

  const fetchUserApi = async () => {
    userService
      .getUser(Id)
      .then((result) => {
        setUser(result);
        setAvatar(result.imageUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserApi();
  }, []);
  return (
    <>
      <div className="bg-gray">
        {avatar !== null ? (
          <Navbar Avatar={avatar} />
        ) : (
          <Navbar Avatar={avatarDefault} />
        )}
        <div className="pt-pTopNav">
          <div className=" grid grid-cols-10 gap-4  ">
            <div className="col-span-2"></div>
            <div className="col-span-6">
              <div className="bg-white rounded pb-1 ">
                <div className="grid grid-cols-8 ">
                  <div className="menu-edit-user col-span-2 border-r border-black/20 ">
                    <ul className=" space-y-2 w-full">
                      <li>
                        <Link
                          to="edit"
                          className="pl-7 py-4 block hover:bg-grayLight/50 focus:font-semibold hover:border-black/20 focus:border-black border-l-2 border-transparent focus:bg-grayLight/50  "
                        >
                          Edit Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="changepassword"
                          className="pl-7 py-4 block hover:bg-grayLight/50 focus:font-semibold hover:border-black/20 focus:border-black border-l-2 border-transparent focus:bg-grayLight/50 active: "
                        >
                          Change Password
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="pl-7 py-4 block hover:bg-grayLight/50 focus:font-semibold hover:border-black/20 focus:border-black border-l-2 border-transparent focus:bg-grayLight/50 "
                        >
                          Friend
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="pl-7 py-4 block hover:bg-grayLight/50 focus:font-semibold hover:border-black/20 focus:border-black border-l-2 border-transparent focus:bg-grayLight/50 "
                        >
                          Help
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-6 flex flex-col gap-6">
                    {user !== null ? <Outlet context={user} /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
