import {Routes, Route} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import NewPost from "../components/newpost/NewPost";
import Homepage from "../pages/Homepage/Homepage";

import EditProfile from "../pages/Profile/EditProfile";
import Profile from "../pages/Profile/Profile";
import TimeLine from "../pages/Timeline/Timeline";
const index = () => {
  return (
    <>
      <div className="bg-gray">
        <Navbar />
        <div className="pt-pTopNav">
          <Routes>
            <Route index path="/" element={<TimeLine />} />
            <Route path="/login" element={<Homepage />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/user" element={<Profile />} />
            <Route path="accounts/*" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default index;
