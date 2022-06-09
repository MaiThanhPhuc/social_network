import React from "react";
import {FaPhotoVideo} from "react-icons/fa";
import Footer from "../footer/Footer";

const NewPost = () => {
  return (
    <>
      <div className="flex gap-4 justify-center h-screen">
        <div className="w-postWidth">
          <div className="bg-white flex rounded flex-col p-7 gap-6">
            <div className="heading">
              <h2 className="text-black font-bold text-xl">Create a post</h2>
            </div>
            <div className="user flex items-center">
              <button class="avatar">
                <div class="w-8 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </button>

              <a className="user-name text-black font-semibold ml-2">
                John Wick
              </a>
            </div>
            <div className="input-title">
              <input
                type="text"
                placeholder="What do you think?"
                class="w-full rounded outline-primaryblue px-3 py-2 text-black/90 bg-grayLight text-sm "
              />
            </div>
            <div className="input-file border border-grayText/20 rounded flex flex-col justify-center items-center gap-3 py-11 bg-grayLight">
              <div className="icons text-black">
                <FaPhotoVideo size={62} />
              </div>
              <span className="text-black text-lg ">
                Drag photos and videos here
              </span>
              <div className="button-choosefile ">
                <label className="btn btn-primary text-white text-sm normal-case btn-sm rounded">
                  Select from your computer
                  <input
                    type="file"
                    name="media"
                    accept="audio/*,video/*,image/*"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="btn-post flex justify-end">
              <button className="btn btn-primary normal-case text-white btn-sm px-6 ">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="w-footerWidth">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default NewPost;
