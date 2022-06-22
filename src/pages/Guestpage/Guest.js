import {useEffect, useState} from "react";
import Post from "../../components/post/Post";
import Navbar from "../../components/navbar/Navbar";
import userService from "../../Services/user.service";
import InfiniteScroll from "react-infinite-scroll-component";
import ProfileGuest from "../../components/guest/ProfileGuest";
import avatarDefault from "../../Resource/Image/avatar.png";

const Guest = () => {
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState();
  const [page, setPage] = useState(0);
  const [countPost, setCountPost] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [user, setUser] = useState(null);
  const temp = JSON.parse(localStorage.getItem("user"));
  const Id = temp.userId;

  useEffect(() => {
    fetchUserApi();
  }, []);

  const fetchUserApi = async () => {
    userService
      .getUser(Id)
      .then((result) => {
        setUser(result);
        setAvatar(result.imageUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPostApi = async () => {
    userService
      .getPostUser(Id, page)
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
              <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{textAlign: "center"}}>
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
              {user !== null ? <ProfileGuest userData={user} /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guest;
