import {useEffect, useState} from "react";

import MessageBox from "../../components/message/MessageBox";
import Navbar from "../../components/navbar/Navbar";
import avatarDefault from "../../Resource/Image/avatar.png";
import userService from "../../Services/user.service";

const MessagePage = () => {
  const [avatar, setAvatar] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const Id = user.userId;
  useEffect(() => {
    fetchUserApi();
  }, []);

  const fetchUserApi = async () => {
    userService
      .getUser(Id)
      .then((result) => {
        setAvatar(result.imageUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="bg-gray">
        {avatar !== null ? (
          <Navbar Avatar={avatar} />
        ) : (
          <Navbar Avatar={avatarDefault} />
        )}
        <div className="pt-pTopNav">
          <div className="flex justify-center">
            <MessageBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
