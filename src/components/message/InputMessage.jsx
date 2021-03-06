import {BiCamera, BiHappy} from "react-icons/bi";
import TextareaAutosize from "react-textarea-autosize";
import {IoSend} from "react-icons/io5";
import {useState} from "react";
import Picker from "emoji-picker-react";
const InputMessage = ({
  stompClient,
  setScroll,
  messages,
  setMessages,
  receiID,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = localStorage.getItem("userName");
  const avatar = localStorage.getItem("userImgUrl");
  const defaultAvatar = "https://i.ibb.co/98bxbqS/avatar.png";
  const [showPicker, setShowPicker] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setNewMessage((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const sendMessageAPI = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.access_token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      message: newMessage,
      senderId: user.userId,
      receiverId: receiID,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://socialnetwork999.herokuapp.com/api/message", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const payload = JSON.parse(result).data;
        payload.senderAvatar = avatar === "null" ? defaultAvatar : avatar;
        payload.fullName = userName;
        stompClient.send(`/app/sendMessage`, {}, JSON.stringify(payload));
        setMessages([...messages, {...payload}]);
        setScroll(true);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmitInput = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (newMessage.trim() !== "") {
        sendMessageAPI();
        setNewMessage("");
      }
    }
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      sendMessageAPI();
      setNewMessage("");
    }
  };

  return (
    <>
      <form action=""></form>
      <div className="chat-input flex w-full items-center absolute gap-2 px-4 bottom-0 py-4 border-t border-black/20">
        <div className="btn-photo-sticker flex text-2xl ">
          <div className="photo-btn rounded-full p-1 hover:bg-grayLight ">
            <BiCamera />
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              setShowPicker((val) => !val);
            }}
            className="ticker-btn rounded-full p-1 hover:bg-grayLight"
          >
            <BiHappy />
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
          </div>
        </div>
        <TextareaAutosize
          maxRows={2}
          placeholder="Type something"
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          value={newMessage}
          onKeyPress={handleSubmitInput}
          className="w-full outline-none border border-black/30 rounded-[22px] resize-none text-sm py-2 px-4"
        />
        <button
          onClick={handleSubmitButton}
          className="btn-send text-xl hover:text-primaryblue/70 text-primaryblue p-1"
        >
          <IoSend />
        </button>
      </div>
    </>
  );
};

export default InputMessage;
