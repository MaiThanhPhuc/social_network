import {useState, useEffect, useRef} from "react";
import InputMessage from "./InputMessage";
import Heading from "./Heading";
import BodyConversation from "./BodyConversation";
import {useParams} from "react-router-dom";
import userService from "../../Services/user.service";
import {over} from "stompjs";
import SockJS from "sockjs-client";
var stompClient = null;

const MessageBox = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [page, setPage] = useState(0);
  const [messages, setMessages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [guestName, setGuestName] = useState();
  const [scroll, setScroll] = useState(false);
  const [messageReceive, setMessageReceive] = useState("");
  const [receive, setReceive] = useState();
  const params = useParams();
  let receiverID = params.receiveID;

  const scrollRef = useRef();

  const fetchDataConversation = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.access_token}`);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    if (receiverID !== undefined) {
      fetch(
        `https://socialnetwork999.herokuapp.com/api/message?senderId=${user.userId}&receiverId=${receiverID}&page=${page}&size=10`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const payload = JSON.parse(result).data;
          setMessages([...payload, ...messages]);
          setPage(page + 1);
          if (payload.length < 10) {
            setHasMore(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const connect = () => {
    let Sock = new SockJS("https://socialnetwork999.herokuapp.com/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected);
  };

  const fetchUserApi = async () => {
    userService
      .getUser(receiverID)
      .then((result) => {
        setGuestName(result.lastName + " " + result.firstName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onConnected = () => {
    stompClient.subscribe(
      "/notification/" + user.userId + "/chat",
      onMessageReceived
    );
  };

  const onDisconect = () => {
    if (stompClient.counter !== 0) {
      stompClient.disconnect(() => {
        stompClient.unsubscribe("sub-1");
      }, {});
    }
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    setMessageReceive(payloadData);
  };

  useEffect(() => {
    setMessages([]);
    setPage(0);
    setHasMore(true);
    setReceive(receiverID);
    fetchUserApi();
  }, [receiverID]);

  useEffect(() => {
    fetchDataConversation();
  }, [receive]);

  useEffect(() => {
    connect();
    return () => {
      onDisconect();
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"});
    setScroll(false);
  }, [scroll]);

  useEffect(() => {
    const ReceiveMessage = () => {
      if (`${messageReceive.senderId}` === receiverID) {
        setMessages([...messages, {...messageReceive}]);
        setScroll(true);
      }
    };
    ReceiveMessage();
  }, [messageReceive]);

  const handleMoreMess = () => {
    if (hasMore) {
      setPage(page + 1);
      fetchDataConversation();
    }
  };

  return (
    <>
      <div className="col-span-5 relative h-messHeight">
        <Heading guestName={guestName} />

        <div className=" main-chat flex flex-col w-full h-[480px] overflow-y-auto gap-2 p-1 mt-2">
          <BodyConversation
            hasMore={hasMore}
            messages={messages}
            handleMoreMess={handleMoreMess}
            scrollRef={scrollRef}
          />
        </div>

        <div className="chat-input">
          <InputMessage
            receiID={receiverID}
            stompClient={stompClient}
            setScroll={setScroll}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      </div>
    </>
  );
};

export default MessageBox;
