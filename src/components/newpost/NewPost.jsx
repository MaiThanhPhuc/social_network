import React, {useState, useEffect} from "react";
import {FaPhotoVideo} from "react-icons/fa";
import Footer from "../footer/Footer";
import Picker from "emoji-picker-react";
import TextareaAutosize from "react-textarea-autosize";
import ImagesUpload from "./ImagesUpload";
import {BsEmojiSmile} from "react-icons/bs";

// Import React FilePond
const NewPost = ({userName, avatar}) => {
  userName = "test";
  avatar = "https://api.lorem.space/image/face?hash=92310";
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const [showPicker, setShowPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setContent((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const handlePreviewImages = (e) => {
    if (e.target.files) {
      const imagesArray = Array.from(e.target.files).map((img) =>
        URL.createObjectURL(img)
      );
      setImages((img) => img.concat(imagesArray));
      Array.from(e.target.files).map((img) => URL.revokeObjectURL(img));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(images);
    console.log(content);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 justify-center">
          <div className="w-postWidth h-newpostHeight">
            <div className="bg-white flex rounded flex-col py-4 px-7 gap-2">
              <div className="heading">
                <h2 className="text-black font-bold text-xl mb-2">
                  Create a post
                </h2>
              </div>
              <div className="user flex items-center">
                <button className="avatar">
                  <div className="w-8 rounded-full">
                    <img src={avatar} />
                  </div>
                </button>
                <a className="user-name text-black font-semibold ml-2">
                  {userName}
                </a>
              </div>
              <div className="input-title flex rounded bg-grayLight">
                <TextareaAutosize
                  maxRows={3}
                  value={content}
                  placeholder="Write a caption"
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full outline-none  resize-none text-sm py-2 px-2 rounded bg-grayLight"
                ></TextareaAutosize>
                <div className=" w-1/8 px-1 relative hover:bg-black/10 flex cursor-pointer items-center">
                  <BsEmojiSmile
                    className="emoji-icon w-8 h-9 p-2  rounded-full"
                    onClick={() => setShowPicker((val) => !val)}
                  />
                  {showPicker ? (
                    <Picker
                      disableSearchBar={true}
                      pickerStyle={{
                        width: "300px",
                        left: "120%",
                        top: "0",
                        position: "absolute",
                        zIndex: "1",
                      }}
                      onEmojiClick={onEmojiClick}
                    />
                  ) : null}
                </div>
              </div>
              <div className="input-file rounded flex flex-col justify-center items-center gap-3 bg-grayLight h-[500px]">
                {images[0] == null ? (
                  <div className=" flex flex-col justify-center items-center gap-3">
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
                          multiple
                          name="media"
                          accept="image/*"
                          className="hidden"
                          onChange={handlePreviewImages}
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <ImagesUpload imageURLs={images} setImages={setImages} />
                )}
              </div>

              <div className="btn-post flex justify-end">
                <button
                  type="submit"
                  className="mt-2 btn btn-primary normal-case text-white btn-sm px-8 "
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="w-footerWidth">
            <Footer />
          </div>
        </div>
      </form>
    </>
  );
};

export default NewPost;
