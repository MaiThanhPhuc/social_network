import React, {useEffect, useState, memo} from "react";
import Footer from "../../components/footer/Footer";
import Post from "../../components/post/Post";
import {HiOutlinePhotograph} from "react-icons/hi";
import Navbar from "../../components/navbar/Navbar";
import {Link} from "react-router-dom";
import userService from "../../Services/user.service";
import InfiniteScroll from "react-infinite-scroll-component";
import avatarDefault from "../../Resource/Image/avatar.png";
import {toast} from "react-toastify";
import {over} from "stompjs";
import SockJS from "sockjs-client";
import "react-toastify/dist/ReactToastify.css";
var stompClient = null;

const TimeLine = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [countPost, setCountPost] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const Id = user.userId;
  const [avatar, setAvatar] = useState();

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
    toast(payloadData.content, {
      autoClose: 2000,
      theme: "dark",
    });
  };

  useEffect(() => {
    const fetchUserApi = async () => {
      userService
        .getUser(Id)
        .then((result) => {
          setAvatar(result.imageUrl);
          localStorage.setItem(
            "userName",
            result.lastName + " " + result.firstName
          );
          localStorage.setItem("userImgUrl", result.imageUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchPostApi();
    fetchUserApi();
    connect();
  }, []);

  const fetchPostApi = async () => {
    userService
      .getPostHomePage(Id, page)
      .then((res) => {
        setPosts([...posts, ...res]);
        setCountPost(res);
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchData = async () => {
    fetchPostApi();
    if (countPost.length < 10) {
      setHasMore(false);
    }
    setPage(page + 1);
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
          <div className="flex gap-4 justify-center h-full">
            <div className="w-postWidth">
              {/* btn new post */}
              <div className="newpost-btn bg-white flex p-3 gap-2 mb-3 rounded">
                <button className="avatar">
                  <div className="w-9 rounded-full">
                    <img
                      src={avatar !== null ? avatar : avatarDefault}
                      alt="Avatar"
                    />
                  </div>
                </button>
                <Link
                  to="/newpost"
                  className="newpost-box text-left outline outline-1 outline-grayLight w-full pt-2 rounded bg-grayLight pl-3 text-sm text-bodytxt/50 font-semibold hover:cursor-text hover:outline-primaryblue hover:bg-white"
                >
                  Create Post
                </Link>
                <Link
                  to="/newpost"
                  className="text-2xl text-bodytxt/70 px-2 hover:bg-grayLight rounded flex justify-center items-center"
                >
                  <HiOutlinePhotograph />
                </Link>
              </div>
              {/* btn */}

              <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<h4 className=" text-center mt-2">Loading...</h4>}
                endMessage={
                  <p style={{textAlign: "center", marginBottom: "16px"}}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {posts.map((post, index) => (
                  <Post key={index} postData={post} stompClient={stompClient} />
                ))}
              </InfiniteScroll>
            </div>
            <div className="w-footerWidth ">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TimeLine);
