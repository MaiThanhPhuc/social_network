import {Routes, Route, Navigate} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
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
import FollowerUser from "../components/user/FollowerUser";
import AdminPage from "../pages/AdminPage/AdminPage";
import Dashboard from "../components/admin/Dashboard";
import UserManagement from "../components/admin/UserManagement";
import AdminRoute from "./AdminRoute";

const index = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<TimeLine />} exact />
          <Route path={`/user`} element={<Profile />} exact />
          <Route path={"/user/:userID"} element={<Guest />} exact />
          <Route path="/newpost" element={<Newpost />} exact />
          <Route element={<AdminRoute />}>
            <Route exact path="admin" element={<AdminPage />}>
              <Route index element={<Dashboard />} />
              <Route path="user" element={<UserManagement />} />
            </Route>
          </Route>
          <Route exact path="accounts" element={<EditProfile />}>
            <Route index element={<Edit_Profile />} />
            <Route path="changepassword" element={<Change_Password />} />
            <Route path="follower" element={<FollowerUser />} />
          </Route>
          <Route exact path="/guest" element={<Guest />} />
          <Route exact path="/inbox" element={<MessagePage />} />
        </Route>
        <Route path={"/login"} element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default index;
