import Footer from "../../components/footer/Footer";
import Post from "../../components/post/Post";
import Profile_User from "../../components/user/Profile_User";

const Profile = () => {
  return (
    <>
      <div className="flex gap-4 justify-center h-full">
        <div className="w-postWidth">
          <Post />
          <Post />
          <Post />
        </div>
        <div className="w-footerWidth">
          <Profile_User />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;
