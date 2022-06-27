import {Outlet} from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
const AdminPage = () => {
  return (
    <>
      <div className=" pl-[251px] bg-white h-screen ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminPage;
