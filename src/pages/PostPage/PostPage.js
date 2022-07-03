import Navbar from "../../components/navbar/Navbar";
import userService from "../../Services/user.service";
import React, {useState, useEffect} from "react";
import avatarDefault from "../../Resource/Image/avatar.png";
import {useParams} from "react-router-dom";
import Post from "../../components/post/Post";

const PostPage = () => {
  const [avatar, setAvatar] = useState();
  const [dataPost, setDataPost] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const Id = user.userId;
  const params = useParams();
  let postIDUrl = params.postID;

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
  console.log(dataPost);
  useEffect(() => {
    fetchUserApi();
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    userService
      .getPostID(Id, postIDUrl)
      .then((result) => {
        console.log(result);
        setDataPost(result);
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
          <div className="flex gap-4 justify-center h-full">
            <div className="w-postWidth">
              {dataPost !== undefined ? (
                avatar !== null ? (
                  <Post postData={dataPost} />
                ) : (
                  <Post postData={dataPost} />
                )
              ) : null}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
