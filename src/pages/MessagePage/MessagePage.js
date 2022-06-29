import {useEffect, useState} from "react";
import MessageBox from "../../components/message/MessageBox";
import Navbar from "../../components/navbar/Navbar";
import avatarDefault from "../../Resource/Image/avatar.png";
import userService from "../../Services/user.service";
import {toast} from "react-toastify";
import {over} from "stompjs";
import SockJS from "sockjs-client";
var stompClient = null;

const MessagePage = () => {
  const [avatar, setAvatar] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const [messageReceive, setMessageReceive] = useState("");
  const [listUser, setListUser] = useState([]);
  const Id = user.userId;

  useEffect(() => {
    fetchUserApi();
    connect();
    fetchListHistoryMessage();
  }, []);

  console.log(listUser);

  const fetchListHistoryMessage = () => {
    userService
      .getConversation(Id)
      .then((res) => {
        setListUser(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const connect = () => {
    let Sock = new SockJS("https://socialnetwork999.herokuapp.com/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected);
  };

  const onConnected = () => {
    stompClient.subscribe("/notification/" + Id + "/chat", onMessageReceived);
  };
  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    setMessageReceive(payloadData);
  };
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
            <MessageBox
              messageReceive={messageReceive}
              setListUser={setListUser}
              listUser={listUser}
              stompClient={stompClient}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
