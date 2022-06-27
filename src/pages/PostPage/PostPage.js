import Navbar from "../../components/navbar/Navbar";
import NewPostForm from "../../components/post/NewPostForm";
import userService from "../../Services/user.service";
import React, {useState, useEffect} from "react";
import avatarDefault from "../../Resource/Image/avatar.png";
import Post from "../../components/post/Post";

const PostPage = () => {
  const [avatar, setAvatar] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const Id = user.userId;
  useEffect(() => {
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
          <Post />
        </div>
      </div>
    </>
  );
};

export default PostPage;
