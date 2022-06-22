import {Routes, Route} from "react-router-dom";
import Newpost from "../pages/NewPost/Newpost";
import Homepage from "../pages/Homepage/Homepage";
import Guest from "../pages/Guestpage/Guest";
import EditProfile from "../pages/Profile/EditProfile";
import Profile from "../pages/Profile/Profile";
import TimeLine from "../pages/Timeline/Timeline";
import MessagePage from "../pages/MessagePage/MessagePage";
import Edit_Profile from "../components/edit_profile/Edit_Profile";
import Change_Password from "../components/edit_profile/Change_Password";

const index = () => {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<Homepage />} />
        <Route path="/" element={<TimeLine />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="accounts" element={<EditProfile />}>
          <Route index path="edit" element={<Edit_Profile />} />
          <Route path="changepassword" element={<Change_Password />} />
        </Route>
        <Route path="/guest" element={<Guest />} />
        <Route path="/inbox" element={<MessagePage />} />
      </Routes>
    </>
  );
};

export default index;
