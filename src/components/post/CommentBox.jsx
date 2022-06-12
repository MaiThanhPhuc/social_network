import React, {useState} from "react";
import Picker from "emoji-picker-react";
import TextareaAutosize from "react-textarea-autosize";
import {BsEmojiSmile} from "react-icons/bs";
const Commentbox = () => {
  const [cmt, setCmt] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setCmt((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const handleCmt = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="cmt-post flex gap-2 mt-2 pt-2 border-t border-black/10">
        <div className="main-cmt-post w-full flex relative justify-center ">
          <button>
            <BsEmojiSmile
              className="emoji-icon w-7 h-7 p-1 hover:bg-black/10 rounded-full"
              onClick={() => setShowPicker((val) => !val)}
            />
          </button>
          {showPicker ? (
            <Picker
              disableSearchBar={true}
              pickerStyle={{
                width: "70%",
                left: "0%",
                bottom: "100%",
                position: "absolute",
                zIndex: "1",
              }}
              onEmojiClick={onEmojiClick}
            />
          ) : null}
          <TextareaAutosize
            maxRows={3}
            value={cmt}
            placeholder="Add a comment..."
            onChange={(e) => setCmt(e.target.value)}
            className="w-full outline-none rounded resize-none text-sm py-1 pl-2"
          />
          <button
            onChange={handleCmt}
            className="text-sm font-semibold text-black px-2"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default Commentbox;
