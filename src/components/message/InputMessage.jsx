import {BiCamera, BiHappy} from "react-icons/bi";
import TextareaAutosize from "react-textarea-autosize";
import {IoSend} from "react-icons/io5";
import {useState} from "react";
import {toast} from "react-toastify";

const InputMessage = ({stompClient, setScroll, messages, setMessages}) => {
  const [newMessage, setNewMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const sendMessageAPI = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.access_token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      message: newMessage,
      senderId: user.userId,
      receiverId: 5,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/message", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const payload = JSON.parse(result).data;
        console.log(payload);
        stompClient.send(`/app/sendMessage`, {}, JSON.stringify(payload));
        setMessages([...messages, {...payload}]);
        setScroll(true);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmitInput = (e) => {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessageAPI();
      setNewMessage("");
    }
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    sendMessageAPI();
    setNewMessage("");
  };

  return (
    <>
      <form action=""></form>
      <div className="chat-input flex w-full items-center absolute gap-2 px-4 bottom-0 py-4 border-t border-black/20">
        <div className="btn-photo-sticker flex text-2xl ">
          <div className="photo-btn rounded-full p-1 hover:bg-grayLight ">
            <BiCamera />
          </div>
          <div className="ticker-btn rounded-full p-1 hover:bg-grayLight">
            <BiHappy />
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