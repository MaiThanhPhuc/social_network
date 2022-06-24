import {useEffect, useState} from "react";
import Post from "../../components/post/Post";
import Navbar from "../../components/navbar/Navbar";
import userService from "../../Services/user.service";
import InfiniteScroll from "react-infinite-scroll-component";
import ProfileGuest from "../../components/guest/ProfileGuest";
import avatarDefault from "../../Resource/Image/avatar.png";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {over} from "stompjs";
import SockJS from "sockjs-client";
var stompClient = null;

const Guest = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [countPost, setCountPost] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [user, setUser] = useState(null);
  const temp = JSON.parse(localStorage.getItem("user"));
  const Id = temp.userId;
  const params = useParams();
  let guestID = params.userID;

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected);
  };

  const onConnected = () => {
    stompClient.subscribe(
      "/notification/" + Id + "/notificationPopUp",
      onMessageReceived
    );
  };
  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);
    toast(payloadData.content, {
      autoClose: 2000,
      theme: "dark",
    });
  };

  useEffect(() => {
    console.log(posts);
    fetchUserApi();
    fetchData();
    connect();
  }, [guestID]);

  const fetchUserApi = async () => {
    userService
      .getGuest(Id, guestID)
      .then((result) => {
        setUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPostApi = async () => {
    userService
      .getPostUser(guestID, page)
      .then((res) => {
        setPosts([...posts, ...res]);
        setCountPost(res);
        setPage(page + 1);
      })
      .catch((err) => console.log(err));
  };

  const fetchData = async () => {
    fetchPostApi();
    if (countPost.length < 10) {
      setPage(0);
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <>
      <div className="bg-gray">
        {localStorage.getItem("userImgUrl") !== null ? (
          <Navbar Avatar={localStorage.getItem("userImgUrl")} />
        ) : (
          <Navbar Avatar={avatarDefault} />
        )}
        <div className="pt-pTopNav">
          <div className="flex gap-4 justify-center h-full">
            <div className="w-postWidth">
              <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{textAlign: "center", marginBottom: "16px"}}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {posts.map((post, index) => (
                  <Post key={index} postData={post} />
                ))}
              </InfiniteScroll>
            </div>
            <div className="w-footerWidth">
              {user !== null ? (
                <ProfileGuest stompClient={stompClient} userData={user} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
