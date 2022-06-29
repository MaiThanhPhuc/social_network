import {useState, useEffect, useRef} from "react";
import {BiMessageRoundedAdd} from "react-icons/bi";
import InputMessage from "./InputMessage";
import UserItems from "./UserItems";
import userService from "../../Services/user.service";
import NewMessageUser from "./NewMessageUser";
import Heading from "./Heading";
import BodyConversation from "./BodyConversation";
import NoneConversation from "./NoneConversation";

const MessageBox = ({messageReceive, stompClient, listUser}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [receiverID, setReceiverID] = useState();
  const [guestName, setGuestName] = useState();
  const [avatarGuest, setAvatarGuest] = useState();
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
    if (receiverID !== undefined) {
      fetch(
        `https://socialnetwork999.herokuapp.com/api/message?senderId=${user.userId}&receiverId=${receiverID}&page=${page}&size=10`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const payload = JSON.parse(result).data;
          console.log(payload);
          setMessages([...payload, ...messages]);
          setPage(page + 1);
          if (payload.length < 10) {
            setHasMore(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const fetchUserFollowing = () => {
    userService
      .getFollowing(user.userId)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDataConversation();
  }, [receiverID]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"});
    setScroll(false);
  }, [scroll]);

  useEffect(() => {
    const ReceiveMessage = () => {
      console.log(messageReceive.receiverId);
      console.log(receiverID);
      if (messageReceive.receiverId === receiverID) {
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

  const handleResetConversation = () => {
    setMessages([]);
    setPage(0);
    setHasMore(true);
  };

  return (
    <>
      <div className="bg-white w-messageWidth h-messHeight rounded-lg shadow-sm  border border-black/10 grid grid-cols-8 mr-12">
        <div className="col-span-3 border-r border-black/10 ">
          <div className="heading-message px-4 py-4 flex flex-col gap-2 mb-2">
            <div className="heading flex items-center justify-between">
              <h1 className=" font-semibold text-xl ">Message</h1>

              <div className="dropdown">
                <label tabIndex="0">
                  <div
                    onClick={fetchUserFollowing}
                    className="new-chat text-2xl text-primaryblue cursor-pointer"
                  >
                    <BiMessageRoundedAdd />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[300px] h-[300px] overflow-y-auto max-h-[500px]"
                >
                  {users[0] !== undefined
                    ? users.map((data, index) => (
                        <NewMessageUser
                          key={index}
                          userData={data}
                          setAvatarGuest={setAvatarGuest}
                          setGuestName={setGuestName}
                          handleResetConversation={handleResetConversation}
                          setReceiverID={setReceiverID}
                        />
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
          <div className=" border-b border-black/20"></div>
          <div className="list-user rounded">
            {listUser !== undefined ? (
              listUser.map((data, index) => (
                <UserItems
                  key={index}
                  setAvatarGuest={setAvatarGuest}
                  setGuestName={setGuestName}
                  handleResetConversation={handleResetConversation}
                  setReceiverID={setReceiverID}
                  dataConversation={data}
                />
              ))
            ) : (
              <div>Let's connect to your friend</div>
            )}
          </div>
        </div>
        {receiverID !== undefined ? (
          <div className="col-span-5 relative h-messHeight">
            <Heading guestName={guestName} />

            <div className=" main-chat flex flex-col w-full h-[480px] overflow-y-auto gap-2 p-1 mt-2">
              <BodyConversation
                hasMore={hasMore}
                messages={messages}
                avatarGuest={avatarGuest}
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
        ) : (
          <NoneConversation />
        )}
      </div>
    </>
  );
};

export default MessageBox;
