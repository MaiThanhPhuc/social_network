import {BiMessageRoundedAdd} from "react-icons/bi";
import {BsInfoCircle} from "react-icons/bs";
import Message from "./Message";
import InputMessage from "./InputMessage";
import UserItems from "./UserItems";
import {useState} from "react";
import {useRef} from "react";
import {useEffect} from "react";

const MessageBox = ({stompClient}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [page, setPage] = useState(0);
  const [messages, setMessages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [receiverID, setReceiverID] = useState(0);
  const [showConversation, setShowConversation] = useState(false);
  const [scroll, setScroll] = useState(false);
  const scrollRef = useRef();
  const fetchDataConversation = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.access_token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://localhost:8080/api/message?senderId=${user.userId}&receiverId=5&page=${page}&size=10`,
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
  };

  useEffect(() => {
    fetchDataConversation();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"});
    setScroll(false);
  }, [scroll]);

  return (
    <>
      <div className="bg-white w-messageWidth h-messHeight rounded-lg shadow-sm  border border-black/10 grid grid-cols-8 mr-12">
        <div className="col-span-3 border-r border-black/10 ">
          <div className="heading-message px-4 py-4 flex flex-col gap-2 mb-2">
            <div className="heading flex items-center justify-between font-semibold text-xl ">
              <h1>Message</h1>
              <div className="new-chat text-2xl text-primaryblue">
                <BiMessageRoundedAdd />
              </div>
            </div>
          </div>
          <div className=" border-b border-black/20"></div>
          <div className="list-user rounded">
            <UserItems setReceiverID={setReceiverID} />
          </div>
        </div>
        <div className="col-span-5 relative h-messHeight">
          <div className="heading-main-chat flex justify-between border-b border-black/20 px-6 py-5">
            <div className="guest-name">
              <h1 className="font-semibold text-lg">John Wick</h1>
            </div>
            <div className="group-btn-left flex text-2xl gap-1 items-center text-black/60">
              <button className="btn-setting text-lg">
                <BsInfoCircle size={25} color={"#000"} />
              </button>
            </div>
          </div>

          <div className=" main-chat flex flex-col w-full h-[480px] overflow-y-auto gap-2 p-1 ">
            {messages[0] !== undefined ? (
              <div
                onClick={() => {
                  if (hasMore) {
                    setPage(page + 1);
                    fetchDataConversation();
                  }
                }}
                className="text-center cursor-pointer"
              >
                View more old message
              </div>
            ) : null}
            {messages[0] !== undefined ? (
              messages.map((item) => (
                <div ref={scrollRef}>
                  <Message key={item.id} data={item} />
                </div>
              ))
            ) : (
              <div className="text-center mt-8 font-bold">Let's go 👋👋👋!</div>
            )}
          </div>
          <div className="chat-input">
            <InputMessage
              stompClient={stompClient}
              setScroll={setScroll}
              messages={messages}
              setMessages={setMessages}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
