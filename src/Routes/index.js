import {Routes, Route} from "react-router-dom";
import Newpost from "../pages/NewPost/Newpost";
import Homepage from "../pages/Homepage/Homepage";
import Guest from "../pages/Guestpage/Guest";
import EditProfile from "../pages/Profile/EditProfile";
import Profile from "../pages/Profile/Profile";
import TimeLine from "../pages/Timeline/Timeline";
import MessagePage from "../pages/MessagePage/MessagePage";
import NotFound from "../pages/NotFound/NotFound";
import Edit_Profile from "../components/user/Edit_Profile";
import Change_Password from "../components/user/Change_Password";

const index = () => {
  const temp = JSON.parse(localStorage.getItem("user"));
  const Id = temp.userId;
  return (
    <>
      <Routes>
        <Route index path="/login" element={<Homepage />} />
        <Route path="/" element={<TimeLine />} />
        <Route path={`/user/${Id}`} element={<Profile />} />
        <Route path={"/user/:userID"} element={<Guest />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="accounts" element={<EditProfile />}>
          <Route index element={<Edit_Profile />} />
          <Route path="changepassword" element={<Change_Password />} />
        </Route>
        <Route path="/guest" element={<Guest />} />
        <Route path="/inbox" element={<MessagePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default index;
